const should = require('should');
const reverse = require('../reverse');

describe('Reverse String', () => {
  it('Should be able to reverse the string `howdy`', () => {
    const text = 'howdy';
    const expectedReverseText = 'ydwoh';
    const actualReversedText = reverse(text);
    should.not.be.null(actualReversedText);
    actualReversedText.should.exactly.be.a.String();
    actualReversedText.should.be.exactly(expectedReverseText);
  });

  it('Should be able to reverse the string `Hello`', () => {
    const text = 'Hello';
    const expectedReverseText = 'olleH';
    const actualReversedText = reverse(text);
    should.not.be.null(actualReversedText);
    actualReversedText.should.exactly.be.a.String();
    actualReversedText.should.be.exactly(expectedReverseText);
  });

  it('Should be able to reverse the string `Greetings from Earth`', () => {
    const text = 'Greetings from Earth';
    const expectedReverseText = 'htraE morf sgniteerG';
    const actualReversedText = reverse(text);
    should.not.be.null(actualReversedText);
    actualReversedText.should.exactly.be.a.String();
    actualReversedText.should.be.exactly(expectedReverseText);
  });
});
