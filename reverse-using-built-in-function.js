// The intent of this file is to reverse
// the string using built in functions.
const reverse = (s) => {
  let str = s.split('');
  str = str.reverse();
  str = str.join('');
  return str;
};

module.exports = reverse;
