import { ObjectId } from '@fastify/mongodb';
import { FastifyInstance, FastifyRequest } from 'fastify';

export async function postRoutes(fastify: FastifyInstance) {
  fastify.get(
    '/post/:id',
    async (request: FastifyRequest<{ Params: { id: string } }>) => {
      return await fastify.mongo.client
        .db('app')
        .collection('posts')
        .findOne({ _id: new ObjectId(request.params.id) });
    }
  );

  fastify.post(
    '/post',
    async (
      request: FastifyRequest<{
        Body: { userId: string; title: string; content: string };
      }>
    ) => {
      return await fastify.mongo.client
        .db('app')
        .collection('posts')
        .insertOne({
          user_id: request.body.userId,
          title: request.body.title,
          content: request.body.content,
          created_at: new Date(),
        });
    }
  );

  fastify.delete(
    '/post/:id',
    async (request: FastifyRequest<{ Params: { id: string } }>) => {
      return await fastify.mongo.client
        .db('app')
        .collection('posts')
        .deleteOne({ _id: new ObjectId(request.params.id) });
    }
  );
}
