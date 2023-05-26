import { PostgresDb } from '@fastify/postgres';

export const RESET_DB = `DROP TABLE IF EXISTS users, posts CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);


CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
`;

export async function resetDb(pg: PostgresDb) {
  await runQuery(pg, RESET_DB);
  return 'Ok';
}

export async function runQuery(
  pg: PostgresDb,
  query: string,
  params: unknown[] = []
) {
  const client = await pg.connect();
  try {
    return await client.query(query, params);
  } finally {
    client.release();
  }
}
