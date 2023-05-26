import { runQuery } from '@api/db/utils';
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

const addUser = `INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *;`;

export default async function (fastify: FastifyInstance) {
  fastify.post(
    '/api/users',
    async (
      request: FastifyRequest<{ Body: { username: string; email: string } }>
    ) => {
      const { username, email } = request.body;

      const { rows } = await runQuery(fastify.pg, addUser, [username, email]);
      return rows;
    }
  );
}
