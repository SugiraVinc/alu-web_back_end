//  a function named cleanSet that returns a string of all the
// .. set values that start with a specific string (startString)
// accepts two arguments: a set (Set) and a startString (String)
// When a value starts with startString you only append the
// ..rest of the string. The string contains all the values of
// the set separated by -

const cleanSet = (set, string) => {
  if (!string || !string.length) return '';
  let value = '';
  for (const el of set) {
    if (el && el.startsWith(string)) {
      value += value.length === 0 ? el.replace(string, '') : el.replace(string, '-');
    }
  }
  return value;
};

export default cleanSet;
