const semver = require('../');

console.info(
  semver.satisfies('1.0.1', '^1.0.0'),
  semver.valid('1.2.3'),
);
