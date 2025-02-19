import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'libs/models-graphql/src/lib/schema.graphql',
  generates: {
    'libs/models-graphql/src/lib/__generated__/models.ts': {
      plugins: ['typescript'],
      config: {
        avoidOptionals: true,
      },
    },
  },
};
export default config;
