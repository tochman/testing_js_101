const foo = require('../src/foo')
const { expect } = require('chai')

describe('foo()', () => {
   it('is expected to return "bar"', () => {
     expect(foo()).to.equal('bar')
   }); 
});