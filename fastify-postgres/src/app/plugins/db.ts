import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import pg from '@fastify/postgres';

export default fp(async function (fastify: FastifyInstance) {
  fastify.register(pg, {
    connectionString: process.env.DB_CONN_STRING,
  });
});
