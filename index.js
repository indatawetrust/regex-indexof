const regexIndexOf = function(array, index) {
  if (!index) {
    index = array;
    array = this;
  }

  array = array
    .map((item, ind) => {
      if ((item instanceof RegExp && item.test(index)) || item === index) {
        return ind;
      }
      return null;
    })
    .filter(item => item != null)[0];

  return array != undefined ? (array < 0 ? -1 : array) : -1;
};

module.exports = regexIndexOf;
