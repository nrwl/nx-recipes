import { FastifyInstance, FastifyRequest } from 'fastify';
import {
  NewPost,
  createPost,
  getPost,
  createSearchIndex,
} from '@fastify-redis/data-access-posts';

export async function postRoutes(fastify: FastifyInstance) {
  fastify.addHook('onReady', async () => {
    await createSearchIndex(fastify.redis);
  });

  fastify.post('/post', async (request: FastifyRequest<{ Body: NewPost }>) => {
    const { username, content } = request.body;
    return await createPost(fastify.redis, { username, content });
  });

  fastify.get(
    '/post/:id',
    async (request: FastifyRequest<{ Params: { id: string } }>) => {
      return await getPost(fastify.redis, request.params.id);
    }
  );
}
