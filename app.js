/* Given this function:

function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}

Refactor it to use the rest oeprator and an arrow function */

const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

console.log(filterOutOdds(1, 2, 3, 4, 5, 6));

// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument. Make sure to do this using rest and spread.

function findMin(...nums) {
  return Math.min(...nums);
}

console.log(findMin(1, 2, 7, 13, 42, 78, 666, 1990));
console.log(findMin(87, 123, 1239, 28, 774, 27, 23));

// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

function mergeObjects(...objs) {
  return Object.assign({}, ...objs);
}

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));

// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

function doubleAndReturnArgs(arr, ...args) {
  const doubledArgs = args.map((arg) => arg * 2);
  return [...arr, ...doubledArgs];
}

console.log(doubleAndReturnArgs([1, 2, 3], 2, 3, 7));

/*
For this section, write the following functions using rest, spread, and refactor these functions to be arrow functions!

Make sure that you are always returning a new array or object and not modifying the existing inputs.


CODE:
remove a random element in the items array
and return a new array without that item. 

function removeRandom(items) {

}

 Return a new array with every item in array1 and array2. 

function extend(array1, array2) {

}

Return a new object with all the keys and values
from obj and a new key/value pair 

function addKeyVal(obj, key, val) {

}


Return a new object with a key removed.

function removeKey(obj, key) {

}


 Combine two objects and return a new object

function combine(obj1, obj2) {

}


Return a new object with a modified key and value.

function update(obj, key, val) {

}
*/

const removeRandom = (items) => {
  let index = Math.floor(Math.random() * items.length);
  return [...items.slice(0, index), ...items.slice(index + 1)];
};

let items = [1, 2, 3, 4, 5];
console.log(removeRandom(items));

const extend = (array1, array2) => [...array1, ...array2];

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
console.log(extend(array1, array2));

const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

let obj = { a: 1, b: 2 };
console.log(addKeyVal(obj, "c", 3));

const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

console.log(removeKey(obj, "a"));

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
console.log(combine(obj1, obj2));

const update = (obj, key, val) => ({ ...obj, [key]: val });

console.log(update(obj, "a", 10));
