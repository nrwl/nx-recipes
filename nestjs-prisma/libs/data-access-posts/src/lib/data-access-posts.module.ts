import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PrismaClientOneModule } from '@with-prisma-nest/prisma-client-one';

@Module({
  imports: [PrismaClientOneModule],
  controllers: [],
  providers: [PostService],
  exports: [PostService],
})
export class DataAccessPostsModule {}
