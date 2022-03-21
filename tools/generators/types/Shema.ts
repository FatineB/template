import { Linter } from '@nrwl/linter';

import { GeneratorType } from './GeneratorType';

export interface Schema {
  name: string;
  directory: string;
  skipJestConfig?: boolean;
}

export interface NormalizedSchema extends Schema {
  fileName: string;
  generatorType: GeneratorType;
  importPath: string;
  linter: Linter;
  name: string;
  packageRoot: string;
  offsetFromRoot: string;
  unitTestRunner: 'jest' | 'none';
  workspaceName: string;
}
