// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (s) => {
  let st;
  st = '';
  for (let i = s.length - 1; i >= 0; i -= 1) {
    st += s[i];
  }
  return st;
};

module.exports = reverse;
