/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { registerPrismaShutdown as registerPrismaOneShutdown } from '@with-prisma-nest/prisma-client-one';
import { registerPrismaShutdown as registerPrismaTwoShutdown } from '@with-prisma-nest/prisma-client-two';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await registerPrismaOneShutdown(app);
  await registerPrismaTwoShutdown(app);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
