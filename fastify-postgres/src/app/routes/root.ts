import { FastifyInstance } from 'fastify';
import { resetDb } from '@api/db/utils';

export default async function (fastify: FastifyInstance) {
  fastify.get('/reset', async () => {
    return await resetDb(fastify.pg);
  });
}
