module.exports = {
  testRegex: '__tests__/.*|(\\.|/)\\w+\\.spec\\.js$',
  collectCoverageFrom: ['./src/**/*.js', '!**/index.js'],
  setupFilesAfterEnv: ['./src/jest-setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};
