import { FastifyRedis } from '@fastify/redis';
import { createId, mapIdToHash } from '@fastify-redis/utils-redis-query';

export type Post = {
  username: string;
  content: string;
  created_at: number;
};

export type NewPost = {
  username: string;
  content: string;
};

export async function createSearchIndex(redis: FastifyRedis) {
  try {
    // this throws when the index does not exist
    await redis.call('FT.INFO', 'postIndex');
  } catch (err) {
    console.log('Index does not exist, creating it now');
    const multiQuery = redis.multi();

    multiQuery.call(
      'FT.CREATE',
      'postIndex', // create index call postIndex
      'ON',
      'HASH', // for all the records with post: namespace
      'PREFIX',
      '1',
      'post:',
      'SCHEMA', // define the index structure
      'username', // user name is text field that is 3x more important than the default weight
      'TEXT',
      'WEIGHT',
      '3.0',
      'content', // content is text field that the default weight (1.0)
      'TEXT',
      'created_at', // created_at is a numeric field that is sortable
      'NUMERIC',
      'SORTABLE'
    );
    // create synonym so when searching 'monorepo' 'nx' will be included
    multiQuery.call(
      'FT.SYNUPDATE',
      'postIndex',
      'monorepoTerms',
      'monorepo',
      'nx'
    );
    await multiQuery.exec();
  } finally {
    console.log('post search index ready');
  }
}

export async function search(redis: FastifyRedis, q: string) {
  return await redis.call('FT.SEARCH', 'postIndex', q);
}

export async function createPost(
  redis: FastifyRedis,
  { username, content }: NewPost
) {
  if ((await redis.exists(`user:${username}`)) === 0) {
    throw new Error('Unable to create a post for a user does not exist.');
  }

  const created_at = Date.now();
  const id = createId({ username, content, created_at });
  const batch = redis.multi();

  batch.hmset(
    `post:${id}`,
    'username',
    username,
    'content',
    content,
    'created_at',
    created_at
  );
  batch.lpush(`users:${username}:feed`, `post:${id}`);
  batch.lpush('feed', `post:${id}`);
  batch.ltrim('feed', 0, 4);

  batch.exec();

  return {
    id,
  };
}

export async function getPost(redis: FastifyRedis, id: string) {
  return await redis.hgetall(`post:${id}`);
}

export async function getFeed(redis: FastifyRedis, username?: string) {
  const keys = await redis.lrange(
    username ? `users:${username}:feed` : 'feed',
    0,
    -1
  );

  if (keys.length === 0) {
    return [];
  }

  const multiQuery = redis.multi();

  keys.forEach((key) => multiQuery.hgetall(key));
  const results = await multiQuery.exec();

  return mapIdToHash(results, keys);
}
