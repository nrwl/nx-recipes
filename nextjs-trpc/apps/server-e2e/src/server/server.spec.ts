import axios from 'axios';

describe('GET /', () => {
  it('should return a message', async () => {
    const res = await axios.get(
      `/trpc/greeting.getGreeting?batch=1&input=%7B%7D`
    );

    expect(res.status).toBe(200);
    expect(res.data).toEqual([
      { result: { data: { message: 'Hello tRPC + Next.js!' } } },
    ]);
  });
});
