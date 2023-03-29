module.exports = {
    verbose: true,
    roots: ['<rootDir>/src'],
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each'],
    snapshotSerializers: ['enzyme-to-json/serializer']
  };
  