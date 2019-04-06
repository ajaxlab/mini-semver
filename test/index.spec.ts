import { expect, use } from 'chai';
import hello from '../src/index';

describe('hello', function () {

  it("returns 'hello'", function () {
    expect(hello()).to.be.equal('hello');
  });

});
