import { TestTrpcRouter } from '@trpc-example-stack/test-trpc-server';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

export const createTestTrpcClient = () =>
  createTRPCProxyClient<TestTrpcRouter>({
    links: [httpBatchLink({ url: '/api' })],
  } as any);
