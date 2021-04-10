const Foo = require('../src/foo')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const expect = chai.expect
chai.use(sinonChai)

describe('Foo', () => {
  const subject = new Foo('Thomas')
  const getNameSpy = sinon.spy(subject, 'getName')
  it('is expected to return "baz"', () => {
    expect(subject.bar).to.equal('baz')
  });

  describe('.greetMe()', () => {
    it('is expected to be bound to subject', () => {
      expect(subject).to.respondTo('greetMe')
    });

    it('is expected to respond with "Hello Thomas)"', () => {
      expect(subject.greetMe()).to.equal('Hello Thomas')
    });

    it.only('is expected to invoke #bar', () => {
      subject.greetMe()
      // subject.greetMe()
      expect(getNameSpy)
        .to.have.been.calledWith('Lucas')
        .and.returned('Lucas')
    });
  });
});