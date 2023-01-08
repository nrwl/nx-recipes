import { ServeFullstackExecutorSchema } from './schema';

export default async function runExecutor(
  options: ServeFullstackExecutorSchema,
) {
  console.log('Executor ran for ServeFullstack', options);
  return {
    success: true
  };
}

