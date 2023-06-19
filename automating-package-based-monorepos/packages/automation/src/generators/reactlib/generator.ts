import {
  formatFiles,
  generateFiles,
  getWorkspaceLayout,
  names,
  readJson,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { ReactlibGeneratorSchema } from './schema';

export async function reactlibGenerator(
  tree: Tree,
  options: ReactlibGeneratorSchema
) {
  const rootLevelScopeName = readJson(tree, 'package.json').name;

  const normalizedOptions = {
    ...options,
    scope: rootLevelScopeName,
    name: names(options.name).fileName,
  };

  const projectRoot = `${getWorkspaceLayout(tree).libsDir}/${
    normalizedOptions.name
  }`;
  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    projectRoot,
    normalizedOptions
  );
  await formatFiles(tree);
}

export default reactlibGenerator;
