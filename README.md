[![Build Status](https://travis-ci.org/indatawetrust/regex-indexof.svg?branch=master)](https://travis-ci.org/indatawetrust/regex-indexof)

Allows regex usage in indexOf function

#### install
```
npm i regex-indexof --save
```

#### usage
```js
const regexIndexOf = require('regex-indexof')

console.log([1,2,3,4,5].indexOf(3))

2

console.log(['/app', /\/app\/[0-9]{1,}/].indexOf("/app"))

0

console.log(['/app', /\/app\/[0-9]{1,}/].indexOf("/app/2"))

1

// or

console.log(regexIndexOf(['/app', /\/app\/[0-9]{1,}/], "/app/2"))

1

```
