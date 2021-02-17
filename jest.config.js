process.env.TZ = 'UTC';

module.exports = {
  preset: 'react-native',
  testEnvironment: 'jsdom',
  setupFiles: ['./test/jest/setup.js'],
  transformIgnorePatterns: ['!node_modules/react-native'],
};
