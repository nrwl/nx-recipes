import { TestTrpcRouter } from '@trpc-react-express/test-trpc-server';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

export const createTestTrpcClient = () =>
  createTRPCProxyClient<TestTrpcRouter>({
    links: [httpBatchLink({ url: '/api' })],
  } as any);
