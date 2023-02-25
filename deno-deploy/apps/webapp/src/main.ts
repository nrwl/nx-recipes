import { Application } from 'oak';

const app = new Application();
app.addEventListener('listen', ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? 'https://' : 'http://'}${
      hostname ?? 'localhost'
    }:${port}`
  );
});

app.use((ctx) => {
  ctx.response.body = 'Hello World!';
});

await app.listen({ port: Number(Deno.env.get('PORT') || 8000) });
