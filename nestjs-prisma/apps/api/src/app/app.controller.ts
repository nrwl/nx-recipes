import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { UserService } from '@with-prisma-nest/data-access-users';
import { PostService } from '@with-prisma-nest/data-access-posts';
import { InventoryService } from '@with-prisma-nest/data-access-inventory';
import { StoreService } from '@with-prisma-nest/data-access-stores';

@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
    private readonly postService: PostService,
    private readonly inventoryService: InventoryService,
    private readonly storeService: StoreService
  ) {}

  @Get('post/:id')
  async getPostById(@Param('id') id: string) {
    return this.postService.post({ id: Number(id) });
  }

  @Get('item/:id')
  async getItemById(@Param('id') id: string) {
    return this.inventoryService.item({ id: Number(id) });
  }

  @Get('feed')
  async getPostsAndItems() {
    const posts = this.postService.posts({ where: { published: true } });
    const items = this.inventoryService.items({
      where: { quantity: { gt: 0 } },
    });

    return Promise.all([posts, items]).then(([posts, items]) => [
      ...posts,
      ...items,
    ]);
  }

  @Get('filter/:searchString')
  async getFilteredPosts(@Param('searchString') searchString: string) {
    const posts = this.postService.posts({
      where: {
        OR: [
          {
            title: {
              contains: searchString,
            },
          },
          {
            content: {
              contains: searchString,
            },
          },
        ],
      },
    });

    const items = this.inventoryService.items({
      where: {
        AND: [
          {
            title: {
              contains: searchString,
            },
          },
          {
            quantity: {
              gt: 0,
            },
          },
        ],
      },
    });

    return Promise.all([posts, items]).then(([posts, items]) => [
      ...posts,
      ...items,
    ]);
  }

  @Post('post')
  async createdDraft(
    @Body() postData: { title: string; content?: string; authorEmail: string }
  ) {
    const { title, content, authorEmail } = postData;
    return this.postService.createPost({
      title,
      content,
      author: {
        connect: { email: authorEmail },
      },
    });
  }

  @Post('item')
  async createItem(
    @Body() itemData: { title: string; quantity?: number; storeId: number }
  ) {
    const { title, quantity, storeId } = itemData;
    return this.inventoryService.createItem({
      title,
      quantity,
      store: {
        connect: { id: storeId },
      },
    });
  }

  @Post('user')
  async createUser(@Body() userData: { name?: string; email: string }) {
    const { name, email } = userData;
    return this.userService.createUser({
      name,
      email,
    });
  }

  @Post('store')
  async createStore(@Body() storeData: { name?: string }) {
    const { name } = storeData;
    return this.storeService.createStore({
      name,
    });
  }

  @Put('publish/:id')
  async publishPost(@Param('id') id: string) {
    return this.postService.updatePost({
      where: { id: Number(id) },
      data: { published: true },
    });
  }

  @Put('item/:id')
  async updateQuanityt(
    @Param('id') id: string,
    @Body() itemData: { quantity: number }
  ) {
    return this.inventoryService.updateItem({
      where: { id: Number(id) },
      data: { quantity: itemData.quantity > 0 ? itemData.quantity : 0 },
    });
  }

  @Delete('post/:id')
  async deletePost(@Param('id') id: string) {
    return this.postService.deletePost({ id: Number(id) });
  }

  @Delete('item/:id')
  async deleteItem(@Param('id') id: string) {
    return this.inventoryService.deleteItem({ id: Number(id) });
  }
}
