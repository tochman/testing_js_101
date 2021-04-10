const Foo = require('../src/foo')
const { expect } = require('chai')

describe('Foo', () => {
  const subject = new Foo('baz')
  xit('is expected to return "baz"', () => {
    expect(subject.bar).to.equal('baz')
  });

  describe('.greetMe()', () => {
    it('is expected to be bound to subject', () => {
      expect(subject).to.respondTo('greetMe')
    });
  
    it('is expected to respond with "Hello Thomas)"', () => {
      expect(subject.greetMe()).to.equal('Hello Thomas')
    });
  });
});