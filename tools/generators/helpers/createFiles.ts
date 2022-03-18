import { generateFiles, names, offsetFromRoot, Tree } from '@nrwl/devkit';
import { join } from 'path';

import { NormalizedSchema } from '../types';

export const createFiles = (
  tree: Tree,
  options: NormalizedSchema,
  sourcePath: string,
): void => {
  const { className, name, propertyName } = names(options.name);

  generateFiles(tree, sourcePath, options.projectRoot, {
    ...options,
    dot: '.',
    className,
    name,
    propertyName,
    cliCommand: 'nx',
    strict: undefined,
    tmpl: '',
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    hasUnitTestRunner: options.unitTestRunner !== 'none',
  });

  if (options.unitTestRunner === 'none') {
    tree.delete(
      join(options.projectRoot, 'src/lib', `${options.fileName}.spec.ts`),
    );
  }
};
