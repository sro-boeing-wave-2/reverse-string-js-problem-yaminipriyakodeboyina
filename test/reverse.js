const should = require('should');
const reverseUsingBuiltInFunctions = require('../reverse-using-built-in-function');
const reverseUsingIterators = require('../reverse-using-iterators');

const reverseTest = (expectedReverseText, actualReversedText) => {
  should.exist(actualReversedText, 'Reversed text cannot be null');
  actualReversedText.should.be.an.instanceOf(String, 'Expected the reversed text to be of type string');
  actualReversedText.should.be.exactly(expectedReverseText, 'The expected reversed text didn\'t match with the actual reversed text');
};

describe('Reverse String', () => {
  it('Should be able to reverse the string `howdy` using built in functions', () => {
    const text = 'howdy';
    const expectedReverseText = 'ydwoh';
    const actualReversedText = reverseUsingBuiltInFunctions(text);
    reverseTest(expectedReverseText, actualReversedText);
  });

  it('Should be able to reverse the string `Hello` using built in functions', () => {
    const text = 'Hello';
    const expectedReverseText = 'olleH';
    const actualReversedText = reverseUsingBuiltInFunctions(text);
    reverseTest(expectedReverseText, actualReversedText);
  });

  it('Should be able to reverse the string `Greetings from Earth` using built in functions', () => {
    const text = 'Greetings from Earth';
    const expectedReverseText = 'htraE morf sgniteerG';
    const actualReversedText = reverseUsingBuiltInFunctions(text);
    reverseTest(expectedReverseText, actualReversedText);
  });

  it('Should be able to reverse the string `howdy` using iterators', () => {
    const text = 'howdy';
    const expectedReverseText = 'ydwoh';
    const actualReversedText = reverseUsingIterators(text);
    reverseTest(expectedReverseText, actualReversedText);
  });

  it('Should be able to reverse the string `Hello` using iterators', () => {
    const text = 'Hello';
    const expectedReverseText = 'olleH';
    const actualReversedText = reverseUsingIterators(text);
    reverseTest(expectedReverseText, actualReversedText);
  });

  it('Should be able to reverse the string `Greetings from Earth` using iterators', () => {
    const text = 'Greetings from Earth';
    const expectedReverseText = 'htraE morf sgniteerG';
    const actualReversedText = reverseUsingIterators(text);
    reverseTest(expectedReverseText, actualReversedText);
  });
});
