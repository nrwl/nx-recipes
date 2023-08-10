import {
  addDependenciesToPackageJson,
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
  updateJson,
} from '@nx/devkit';
import * as path from 'path';
import { PresetGeneratorSchema } from './schema';

export default async function (tree: Tree, options: PresetGeneratorSchema) {
  const projectRoot = `.`;

  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'application',
    targets: {},
  });

  updateJson(tree, 'package.json', (json) => {
    json.scripts = json.scripts || {};

    // generate a start script into the package.json
    json.scripts.start = 'npx react-scripts start';
    return json;
  });

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);

  return addDependenciesToPackageJson(
    tree,
    {
      react: 'latest',
      'react-dom': 'latest',
      'react-scripts': 'latest',
    },
    {
      '@types/react': 'latest',
      '@types/react-dom': 'latest',
    }
  );
}
