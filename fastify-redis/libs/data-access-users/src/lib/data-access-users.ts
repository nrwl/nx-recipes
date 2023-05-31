import { FastifyRedis } from '@fastify/redis';
import { getFeed } from '@fastify-redis/data-access-posts';

export type NewUser = {
  username: string;
};
export async function createUser(redis: FastifyRedis, { username }: NewUser) {
  const userKey = `user:${username}`;

  if ((await redis.exists(userKey)) === 0) {
    await redis.set(userKey, Date.now());

    return { username };
  }
}

export async function getUserFeed(redis: FastifyRedis, username: string) {
  return getFeed(redis, username);
}
