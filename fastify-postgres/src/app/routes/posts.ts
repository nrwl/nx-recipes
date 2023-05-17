import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

const getAllPosts = 'SELECT * from posts';
const getPostById = 'SELECT * from posts WHERE id = $1';
const createPostWithUserEmail = `INSERT INTO posts (title, content, user_id)
VALUES ($1, $2, (
  SELECT id FROM users WHERE email = $3 
)) RETURNING * ;`;

export default async function (fastify: FastifyInstance) {
  fastify.get('/api/posts', async () => {
    const client = await fastify.pg.connect();
    try {
      const { rows } = await client.query(getAllPosts);
      return rows;
    } finally {
      client.release();
    }
  });

  fastify.get(
    '/api/posts/:id',
    async (request: FastifyRequest<{ Params: { id: string } }>) => {
      const { id } = request.params;
      const client = await fastify.pg.connect();
      try {
        const { rows } = await client.query(getPostById, [id]);
        return rows;
      } finally {
        client.release();
      }
    }
  );

  fastify.post(
    '/api/posts',
    async (
      request: FastifyRequest<{
        Body: { title: string; content: string; author_email: string };
      }>
    ) => {
      const { title, content, author_email } = request.body;
      const client = await fastify.pg.connect();
      try {
        const { rows } = await client.query(createPostWithUserEmail, [
          title,
          content,
          author_email,
        ]);
        return rows;
      } finally {
        client.release();
      }
    }
  );
}
