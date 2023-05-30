import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@acme/api';

const getBaseUrl = () => {
  return (
    process.env.VERCEL_URL || process.env.BASE_URL || `http://localhost:4200`
  );
};

export const api = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url: `${getBaseUrl()}/api/trpc` })],
} as any);
