import semver from '../';

const okays: string[][] = [
  ['1.0.0', '1.0.0'],
  ['~1.0.0', '1.0.0'],
  ['^1.0.0', '1.0.0'],
  ['^1.0.0', '1.0.1'],
  ['^0.0.1', '0.0.1'],
  ['^0.7.0', '0.7.0'],
  ['^0.7.0', '0.7.1'],
  ['^1.1.2', '1.2.1'],
  ['^1.1.x', '1.1.10'],
];
const fails: string[][] = [
  ['^0.0.1', '0.0.2'],
  ['^0.7.1', '0.7.0'],
  ['^0.8.1', '0.7.0'],
  ['^0.8.1', '0.9.0'],
  ['^17.1.2', '17.1.1'],
  ['^17.1.2', '17.0.1'],
  ['^17.2.2', '14.1.1'],
];

const hrstart = process.hrtime();

for (let i = 0; i < 1000; i++) {
  okays.forEach((c) => {
    semver.satisfies(c[1], c[0]);
  });
  fails.forEach((c) => {
    semver.satisfies(c[1], c[0]);
  });
}

const hrend = process.hrtime(hrstart);
console.info('mini-semver: %ds %dms', hrend[0], hrend[1] / 1000000);
