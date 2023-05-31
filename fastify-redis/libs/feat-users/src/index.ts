import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import {
  NewUser,
  createUser,
  getUserFeed,
} from '@fastify-redis/data-access-users';

export async function userRoutes(fastify: FastifyInstance) {
  fastify.post(
    '/user',
    async (request: FastifyRequest<{ Body: NewUser }>, reply: FastifyReply) => {
      const { username } = request.body;

      const user = await createUser(fastify.redis, { username });
      if (user) {
        return user;
      }
      reply.code(400).send({ error: 'User already exists.' });
    }
  );

  fastify.get(
    '/user/:username/feed',
    async (request: FastifyRequest<{ Params: { username: string } }>) => {
      const { username } = request.params;

      return await getUserFeed(fastify.redis, username);
    }
  );
}
