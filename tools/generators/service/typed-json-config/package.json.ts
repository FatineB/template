import { NormalizedSchema, PackageJson } from '../../types';

export const packageJson = (options: NormalizedSchema): PackageJson => ({
  name: `@${options.workspaceName}/${options.importPath}`,
  private: true,
  version: '1.0.0',
  license: 'UNLICENSED',
  scripts: {
    deploy: 'serverless deploy',
    'deploy-production': 'serverless deploy --stage production',
    'deploy-staging': 'serverless deploy --stage staging',
    deployedCommit: 'serverless deployedCommit',
    'lint-fix': 'yarn linter-base-config --fix',
    'lint-fix-all': 'yarn lint-fix .',
    'linter-base-config': 'eslint --ext=js,ts .',
    remove: 'serverless remove',
    'remove-production': 'serverless remove --stage production',
    'remove-staging': 'serverless remove --stage staging',
    'sls-info': 'serverless info --verbose',
    test: 'yarn test-linter && yarn test-type && yarn test-unit',
    'test-linter': 'yarn linter-base-config .',
    'test-type': 'tsc --noEmit',
    'test-unit': 'jest --runInBand --collectCoverage --logHeapUsage',
  },
  dependencies: {
    [`@${options.workspaceName}/serverless-configuration`]: '1.0.0',
    [`@${options.workspaceName}/serverless-helpers`]: '1.0.0',
  },
  devDependencies: {
    [`@${options.workspaceName}/configuration`]: '1.0.0',
    [`@${options.workspaceName}/core-contracts`]: '1.0.0',
    '@serverless/typescript': '^3.3.0',
    '@types/jest': '^27.4.1',
    '@types/node': '^17.0.21',
    esbuild: '^0.14.23',
    eslint: '^8.11.0',
    jest: '^27.5.1',
    serverless: '^3.7.0',
    'serverless-esbuild': '^1.25.0',
    'ts-jest': '^27.1.3',
    'ts-node': '^10.6.0',
    typescript: '^4.6.2',
  },
});
