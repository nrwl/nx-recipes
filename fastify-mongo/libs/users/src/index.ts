import { ObjectId } from '@fastify/mongodb';
import { FastifyInstance, FastifyRequest } from 'fastify';

export async function userRoutes(fastify: FastifyInstance) {
  fastify.get('/user', async () => {
    return await fastify.mongo.client
      .db('app')
      .collection('users')
      .find()
      .toArray();
  });

  fastify.get(
    '/user/:id',
    async (request: FastifyRequest<{ Params: { id: string } }>) => {
      return await fastify.mongo.client
        .db('app')
        .collection('users')
        .findOne({ _id: new ObjectId(request.params.id) });
    }
  );

  fastify.post(
    '/user',
    async (
      request: FastifyRequest<{ Body: { name: string; email: string } }>
    ) => {
      return await fastify.mongo.client
        .db('app')
        .collection('users')
        .insertOne({
          name: request.body.name,
          email: request.body.email,
        });
    }
  );

  fastify.delete(
    '/user/:id',
    async (request: FastifyRequest<{ Params: { id: string } }>) => {
      return await fastify.mongo.client
        .db('app')
        .collection('users')
        .deleteOne({
          _id: new ObjectId(request.params.id),
        });
    }
  );

  fastify.get(
    '/user/:id/posts',
    async (request: FastifyRequest<{ Params: { id: string } }>) => {
      return await fastify.mongo.client
        .db('app')
        .collection('posts')
        .find({ user_id: request.params.id })
        .toArray();
    }
  );
}
