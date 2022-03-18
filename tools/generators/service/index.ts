import { formatFiles, installPackagesTask, Tree } from '@nrwl/devkit';
import { join } from 'path';

import { normalizeOptions, packageGenerator } from '../helpers';
import { symlinkVsCodeConfiguration } from '../helpers/symlink';
import { GeneratorType, Schema } from '../types';
import {
  packageJson,
  packageProjectJson,
  packageTsConfig,
} from './typed-json-config';

const SOURCE_FOLDER = './files';

export default async (tree: Tree, schema: Schema): Promise<() => void> => {
  const options = normalizeOptions(tree, schema, GeneratorType.SERVICE);

  packageGenerator({
    tree,
    options,
    sourcePath: join(__dirname, SOURCE_FOLDER),
    packageJson,
    packageProjectJson,
    packageTsConfig,
  });
  await formatFiles(tree);

  return () => {
    symlinkVsCodeConfiguration(tree, options);
    installPackagesTask(tree, true);
  };
};
