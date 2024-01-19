import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

export default async function (fastify: FastifyInstance) {
  fastify.get('/', (_, reply: FastifyReply) => {
    return reply.redirect('/user');
  });
}
