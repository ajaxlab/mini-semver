import { expect } from 'chai';
import miniSemver from '../src';

describe('mini-semver', function () {
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
  okays.forEach((c) => {
    it(`satisfies ${c[1]} with ${c[0]}`, function () {
      expect(miniSemver.satisfies(c[1], c[0])).to.equal(true);
    });
  });
  fails.forEach((c) => {
    it(`does not satisfies ${c[1]} with ${c[0]}`, function () {
      expect(miniSemver.satisfies(c[1], c[0])).to.equal(false);
    });
  });
});
