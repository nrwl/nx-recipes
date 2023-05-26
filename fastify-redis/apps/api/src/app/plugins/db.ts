import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import fp from 'fastify-plugin';
import redis from '@fastify/redis';

export default fp(async function (fastify: FastifyInstance) {
  fastify.register(redis, {
    host: '127.0.0.1',
    closeClient: true,
  });
});
