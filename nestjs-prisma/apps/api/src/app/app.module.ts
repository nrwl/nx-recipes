import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { DataAccessPostsModule } from '@with-prisma-nest/data-access-posts';
import { DataAccessUsersModule } from '@with-prisma-nest/data-access-users';
import { DataAccessInventoryModule } from '@with-prisma-nest/data-access-inventory';
import { DataAccessStoresModule } from '@with-prisma-nest/data-access-stores';

@Module({
  imports: [
    DataAccessUsersModule,
    DataAccessPostsModule,
    DataAccessStoresModule,
    DataAccessInventoryModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
