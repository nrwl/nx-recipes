import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { search, getFeed } from '@fastify-redis/data-access-posts';

export default async function (fastify: FastifyInstance) {
  fastify.get('/count', async () => {
    const count = await fastify.redis.incr('counter');
    return { count };
  });
  fastify.get(
    '/search',
    async (request: FastifyRequest<{ Querystring: { q: string } }>) => {
      return await search(fastify.redis, request.query.q);
    }
  );

  fastify.get('/', async () => {
    return getFeed(fastify.redis);
  });
}
