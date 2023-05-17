import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

const addUser = `INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *;`;

export default async function (fastify: FastifyInstance) {
  fastify.post(
    '/api/users',
    async (
      request: FastifyRequest<{ Body: { username: string; email: string } }>
    ) => {
      const { username, email } = request.body;
      const client = await fastify.pg.connect();
      try {
        const { rows } = await client.query(addUser, [username, email]);
        return rows;
      } finally {
        client.release();
      }
    }
  );
}
