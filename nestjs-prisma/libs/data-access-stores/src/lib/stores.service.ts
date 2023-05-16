import { Injectable } from '@nestjs/common';
import { Prisma, PrismaService } from '@with-prisma-nest/prisma-client-two';

@Injectable()
export class StoreService {
  constructor(private prisma: PrismaService) {}

  async store(storeWhereUniqueInput: Prisma.StoreWhereUniqueInput) {
    return this.prisma.store.findUnique({
      where: storeWhereUniqueInput,
    });
  }

  async stores(options: {
    skip?: number;
    take?: number;
    cursor?: Prisma.StoreWhereUniqueInput;
    where?: Prisma.StoreWhereInput;
    orderBy?: Prisma.StoreOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = options;

    return this.prisma.store.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createStore(data: Prisma.StoreCreateInput) {
    return this.prisma.store.create({
      data,
    });
  }

  async updateStore(options: {
    where: Prisma.StoreWhereUniqueInput;
    data: Prisma.StoreUpdateInput;
  }) {
    const { where, data } = options;
    return this.prisma.store.update({
      data,
      where,
    });
  }

  async deleteStore(where: Prisma.StoreWhereUniqueInput) {
    return this.prisma.store.delete({
      where,
    });
  }
}
