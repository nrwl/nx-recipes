import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { PrismaClientTwoModule } from '@with-prisma-nest/prisma-client-two';

@Module({
  imports: [PrismaClientTwoModule],
  controllers: [],
  providers: [InventoryService],
  exports: [InventoryService],
})
export class DataAccessInventoryModule {}
