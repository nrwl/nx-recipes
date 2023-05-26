import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { createHash } from 'node:crypto';

export default async function (fastify: FastifyInstance) {
  fastify.get('/count', async () => {
    const count = await fastify.redis.incr('counter');
    return { count };
  });
  fastify.get(
    '/search',
    async (request: FastifyRequest<{ Querystring: { q: string } }>) => {
      try {
        await fastify.redis.call('FT.INFO', 'postIndex');
      } catch (err) {
        console.log('Index does not exist, creating it now');
        // TODO: this is really bad as if there are a bunch of hashes
        // the index could lock up here. but this is just for the demo
        const multiQuery = fastify.redis.multi();

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
        multiQuery.call(
          'FT.SYNUPDATE',
          'postIndex',
          'monorepoTerms',
          'monorepo',
          'nx'
        );
        await multiQuery.exec();
        console.log('Index created');
      }

      return await fastify.redis.call(
        'FT.SEARCH',
        'postIndex',
        request.query.q
      );
    }
  );

  fastify.get('/', async () => {
    // read from the feed list,
    // when a post is added the list is auto trimmed to the most recent items
    // so read the entire list each time
    const keys = await fastify.redis.lrange('feed', 0, -1);

    if (keys.length === 0) {
      return [];
    }

    const multiQuery = fastify.redis.multi();

    keys.forEach((key) => multiQuery.hgetall(key));
    const results = await multiQuery.exec();

    return results.map((res: [unknown, any], idx) => ({
      ...res[1],
      id: keys[idx].split(':').at(-1),
    }));
  });

  fastify.post(
    '/post',
    async (
      request: FastifyRequest<{ Body: { username: string; content: string } }>,
      reply: FastifyReply
    ) => {
      const { username, content } = request.body;

      if ((await fastify.redis.exists(`user:${username}`)) === 0) {
        reply.code(400).send({ error: 'User does not exist.' });
        return;
      }

      const created_at = Date.now();
      const id = createHash('sha256')
        .update(`${username}:${content}${created_at}`)
        .digest('hex')
        .slice(0, 36);

      const batch = fastify.redis.multi();

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
  );

  fastify.get(
    '/post/:id',
    async (request: FastifyRequest<{ Params: { id: string } }>) => {
      const { id } = request.params;
      const post = await fastify.redis.hgetall(`post:${id}`);
      return post;
    }
  );

  fastify.post(
    '/user',
    async (
      request: FastifyRequest<{ Body: { username: string } }>,
      reply: FastifyReply
    ) => {
      const { username } = request.body;

      if ((await fastify.redis.exists(`user:${request.body.username}`)) === 0) {
        await fastify.redis.set(`user:${request.body.username}`, Date.now());

        return { username };
      }

      reply.code(400).send({ error: 'User already exists.' });
    }
  );

  fastify.get(
    '/user/:username/feed',
    async (request: FastifyRequest<{ Params: { username: string } }>) => {
      const { username } = request.params;
      const posts = await fastify.redis.lrange(`users:${username}:feed`, 0, -1);
      const multiQuery = fastify.redis.multi();

      posts.forEach((key) => multiQuery.hgetall(key));
      const results = await multiQuery.exec();

      return results.map((res: [unknown, any], idx) => ({
        ...res[1],
        id: posts[idx].split(':').at(-1),
      }));
    }
  );
}
