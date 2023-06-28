import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@acme/api';

const getApiUrl = () => {
  return process.env.API_URL || `http://localhost:3000`;
};

export const api = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url: `${getApiUrl()}/trpc` })],
} as any);
