import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

export default async function (fastify: FastifyInstance) {
  fastify.get(
    '/',
    async function (request: FastifyRequest, reply: FastifyReply) {
      const client = await fastify.pg.connect();
      try {
        const { rows } = await client.query('SELECT NOW()');
        reply.send(rows);
      } finally {
        client.release();
      }
    }
  );
}
