import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaClientOneModule } from '@with-prisma-nest/prisma-client-one';

@Module({
  controllers: [],
  providers: [UserService],
  exports: [UserService],
  imports: [PrismaClientOneModule],
})
export class DataAccessUsersModule {}
