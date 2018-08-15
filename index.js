const regexIndexOf = (array = [], index) => {
  array = array
    .map((item, ind) => {
      if ((item instanceof RegExp && item.test(index)) || item == index) {
        return ind;
      }
      return null;
    })
    .filter(item => item)[0];

  return array || -1;
};

Array.prototype.indexOf = function(index) {
  return regexIndexOf(this, index);
};

module.exports = regexIndexOf;
