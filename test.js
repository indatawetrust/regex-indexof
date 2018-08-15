import test from 'ava'

const regexIndexOf = require('./index')

test('#tests', t => {

  Array.prototype.indexOf = regexIndexOf;

  t.is([1,2,3,4,5,6,7,8,9,10].indexOf(1), 0)
  t.is([1,2,3,4,5,6,7,8,9,10].indexOf(11), -1)
  t.is([1,2,3,4,5,6,7,8,9,10].indexOf(5), 4)
  t.is([1,2,3,4,/5/,6,7,8,9,10].indexOf(5), 4)
  t.is(regexIndexOf([1,2,3,4,/5/,6,7,8,9,10], 5), 4)

})
