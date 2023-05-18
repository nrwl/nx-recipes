import { Module } from '@nestjs/common';
import { StoreService } from './stores.service';
import { PrismaClientTwoModule } from '@with-prisma-nest/prisma-client-two';

@Module({
  imports: [PrismaClientTwoModule],
  controllers: [],
  providers: [StoreService],
  exports: [StoreService],
})
export class DataAccessStoresModule {}
