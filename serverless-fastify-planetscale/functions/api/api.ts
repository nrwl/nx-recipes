import { Handler } from '@netlify/functions';
import fastify, { FastifyInstance, FastifyRequest } from 'fastify';
import awsLambdaFastify from '@fastify/aws-lambda';
import mysql, { MySQLPromiseConnection } from '@fastify/mysql';
import sensible from '@fastify/sensible';

declare module 'fastify' {
  interface FastifyInstance {
    mysql: MySQLPromiseConnection;
  }
}

async function routes(fastify: FastifyInstance) {
  fastify.get('/', async () => {
    const [rows] = await fastify.mysql.query('SELECT * FROM users');
    return rows;
  });

  fastify.get(
    '/user/:id',
    async (request: FastifyRequest<{ Params: { id: string } }>) => {
      const [rows] = await fastify.mysql.query(
        'SELECT * FROM users WHERE id = ?',
        [request.params.id]
      );
      return rows;
    }
  );

  fastify.post(
    '/user',
    async (
      request: FastifyRequest<{ Body: { name: string; email: string } }>
    ) => {
      const { email, name } = request.body;
      const [rows] = await fastify.mysql.query(
        'INSERT INTO users (email, name) VALUES (?, ?)',
        [email, name]
      );
      return rows;
    }
  );

  fastify.delete(
    '/user/:id',
    async (request: FastifyRequest<{ Params: { id: string } }>) => {
      const [rows] = await fastify.mysql.query(
        'DELETE FROM users WHERE id = ?',
        [request.params.id]
      );
      return rows;
    }
  );
}

function init() {
  const app = fastify();
  app.register(sensible);
  app.register(mysql, {
    connectionString: process.env.DB_URI,
    promise: true,
  });
  // set the prefix for the netlify functions url
  app.register(routes, { prefix: '/.netlify/functions/api' });
  return app;
}

// Note: Netlify deploys this function at the endpoint /.netlify/functions/api
export const handler: Handler = awsLambdaFastify(init());
