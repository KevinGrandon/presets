module.exports = {
  all: {
    description: 'Group all updates together',
    groupName: 'all dependencies',
    groupSlug: 'all',
    packageRules: [
      {
        packagePatterns: ['*'],
        groupName: 'all dependencies',
        groupSlug: 'all',
      },
    ],
    lockFileMaintenance: {
      enabled: false,
    },
  },
  allNonMajor: {
    description: 'Group all minor and patch updates together',
    packageRules: [
      {
        packagePatterns: ['*'],
        minor: {
          groupName: 'all non-major dependencies',
          groupSlug: 'all-minor-patch',
        },
      },
    ],
  },
  allApollographql: {
    description: 'Group all packages published by Apollo GraphQL together',
    packageRules: [
      {
        extends: 'packages:apollographql',
        groupName: 'all apollo-graphql packages',
      },
    ],
  },
  definitelyTyped: {
    description: 'Group all @types packages together',
    packageRules: [
      {
        groupName: 'definitelyTyped',
        packagePatterns: ['^@types/'],
      },
    ],
  },
  polymer: {
    description: 'Group all @polymer packages together',
    packageRules: [
      {
        groupName: 'polymer packages',
        packagePatterns: ['^@polymer/'],
      },
    ],
  },
  linters: {
    description: 'Group various lint packages together',
    packageRules: [
      {
        extends: 'packages:linters',
        groupName: 'linters',
      },
    ],
  },
  jsUnitTest: {
    description: 'Group JS unit test packages together',
    packageRules: [
      {
        extends: 'packages:jsUnitTest',
        groupName: 'JS unit test packages',
      },
    ],
  },
  jsUnitTestNonMajor: {
    description: 'Group JS unit test packages together',
    packageRules: [
      {
        extends: 'packages:jsUnitTest',
        minor: {
          groupName: 'JS unit test packages',
        },
      },
    ],
  },
  unitTest: {
    description: 'Group all unit test packages together',
    packageRules: [
      {
        extends: 'packages:unitTest',
        groupName: 'unit test packages',
      },
    ],
  },
  unitTestNonMajor: {
    description: 'Group all unit test packages together',
    packageRules: [
      {
        extends: 'packages:unitTest',
        minor: {
          groupName: 'unit test packages',
        },
      },
    ],
  },
  jsTest: {
    description: 'Group JS test packages together',
    packageRules: [
      {
        extends: 'packages:jsTest',
        groupName: 'JS test packages',
      },
    ],
  },
  jsTestMonMajor: {
    description: 'Group non-major JS test package updates together',
    packageRules: [
      {
        extends: 'packages:jsTest',
        minor: {
          groupName: 'JS test packages',
        },
      },
    ],
  },
  test: {
    description: 'Group all test packages together',
    packageRules: [
      {
        extends: 'packages:test',
        groupName: 'test packages',
      },
    ],
  },
  testNonMajor: {
    description: 'Group all non-major test package updates together',
    packageRules: [
      {
        extends: 'packages:test',
        minor: {
          groupName: 'test packages',
        },
      },
    ],
  },
};
