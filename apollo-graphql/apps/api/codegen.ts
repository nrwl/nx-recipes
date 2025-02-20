import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'libs/models-graphql/src/lib/schema.graphql',
  generates: {
    'apps/api/src/__generated__/resolvers.ts': {
      plugins: ['add', 'typescript-resolvers'],
      config: {
        useIndexSignature: true,
        content: 'import * as types from "@nx-apollo/models-graphql"',
        namespacedImportName: 'types',
      },
    },
  },
};
export default config;
