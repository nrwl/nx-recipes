import { Application } from 'oak';
import { routes, allowedMethods } from './router.ts';
const app = new Application();
app.addEventListener('listen', ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? 'https://' : 'http://'}${
      hostname ?? 'localhost'
    }:${port}`
  );
});
app.use(routes);
app.use(allowedMethods);

await app
  .listen({ port: Number(Deno.env.get('PORT') || 8000) })
  .catch((err) => {
    console.error('Error serving app. Original Error:', err);
  });
