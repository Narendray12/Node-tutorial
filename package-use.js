const lo = require('lodash');

const arr = [1,[2,[3,[4,[5]]]]];
const newArr = lo.flattenDeep(arr);
console.log(newArr);