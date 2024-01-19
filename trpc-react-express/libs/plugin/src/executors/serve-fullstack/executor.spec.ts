import { ServeFullstackExecutorSchema } from './schema';
import executor from './executor';

const options: ServeFullstackExecutorSchema = {};

describe('ServeFullstack Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
