import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'libs/models-graphql/src/lib/schema.graphql',
  documents: ['libs/feature-sets/src/**/*.graphql'],
  generates: {
    'libs/feature-sets/src/lib/__generated__/operations.ts': {
      plugins: ['add','typescript-operations','typescript-react-apollo'],
      config: {
        useIndexSignature: true,
        content: 'import * as types from "@nx-apollo/models-graphql"',
        namespacedImportName: 'types',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
