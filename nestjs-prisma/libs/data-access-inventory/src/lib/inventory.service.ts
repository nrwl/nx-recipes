import { Injectable } from '@nestjs/common';
import { PrismaService, Prisma } from '@with-prisma-nest/prisma-client-two';

@Injectable()
export class InventoryService {
  constructor(private prismaService: PrismaService) {}

  async item(itemWhereUniqueInput: Prisma.ItemWhereUniqueInput) {
    return this.prismaService.item.findUnique({
      where: itemWhereUniqueInput,
    });
  }

  async items(options: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ItemWhereUniqueInput;
    where?: Prisma.ItemWhereInput;
    orderBy?: Prisma.ItemOrderByWithRelationInput;
  }) {
    const { skip, take, where, cursor, orderBy } = options;
    return this.prismaService.item.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createItem(data: Prisma.ItemCreateInput) {
    return this.prismaService.item.create({
      data,
    });
  }

  async updateItem(options: {
    where: Prisma.ItemWhereUniqueInput;
    data: Prisma.ItemUpdateInput;
  }) {
    const { where, data } = options;
    return this.prismaService.item.update({
      data,
      where,
    });
  }

  async deleteItem(where: Prisma.ItemWhereUniqueInput) {
    return this.prismaService.item.delete({
      where,
    });
  }
}
