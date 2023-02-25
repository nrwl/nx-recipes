import { handler } from './handler.ts';
import { assertInstanceOf } from 'https://deno.land/std@0.172.0/testing/asserts.ts';

Deno.test('handler', async () => {
  const response = await handler(new Request('http://localhost:3000'));
  assertInstanceOf(
    response,
    Response,
    'handler did not return an instance of a Response'
  );
});
