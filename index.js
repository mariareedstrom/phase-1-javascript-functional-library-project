// myEach function:

const myEach = function (collection, callback) {
  // check if collection is array or object
  let result = [];

  if (!Array.isArray(collection)) {
    // if object, use obj method to create array with obj values
    result = Object.values(collection);
  } else {
    result = collection;
  }

  //loop through array, passing eache element in turn to the callback fn
  for (let i = 0; i < result.length; i++) {
    callback(result[i], i, result);
  }
  // return original, unmodified collection
  return collection;
};

// myMap function:
const myMap = function (collection, callback) {
  // check if collection is array or object

  let result = [];

  if (!Array.isArray(collection)) {
    // if object, use obj method to create array with obj values
    result = Object.values(collection);
  } else {
    result = collection;
  }

  let returnValue = [];

  for (let i = 0; i < result.length; i++) {
    let newElements = callback(result[i], i, result);
    returnValue.push(newElements);
  }
  return returnValue;
};

// myReduce function:
const myReduce = function (collection, callback, initValue) {
  // check if collection is array or object

  let result = [];

  if (!Array.isArray(collection)) {
    // if object, use obj method to create array with obj values
    result = Object.values(collection);
  } else {
    result = collection;
  }
  //initialize accumulator with initial value or first value of array if none given
  let acc = initValue;
  let startAtIndex = 0;

  if (initValue === undefined) {
    acc = result[0];
    startAtIndex = 1;
  }

  //iterate through collection passing each element through callback fn
  // return from callback fn accumulated as they are run
  for (let i = startAtIndex; i < result.length; i += 1) {
    const value = result[i];
    acc = callback(acc, value, i, result);
  }

  return acc;
};

// myFind function:
const myFind = function (collection, callback) {
  // check if collection is array or object

  let result;

  if (!Array.isArray(collection)) {
    // if object, use obj method to create array with obj values
    result = Object.values(collection);
  } else {
    result = collection;
  }

  //   iterate through list
  for (const value of result) {
    // return first one that passes as true
    if (callback(value)) {
      return value;
    }
  }

  //   return undefined if no test passes
  return;
};

// myFilter function:
const myFilter = function (collection, callback) {
  // check if collection is array or object

  let result = [];

  if (!Array.isArray(collection)) {
    // if object, use obj method to create array with obj values
    result = Object.values(collection);
  } else {
    result = collection;
  }

  let filtered = [];
  // iterate through arrray,return an array of each value that pass the callback fn test
  //if no matches found return empty array

  for (let i = 0; i < result.length; i++) {
    if (callback(result[i])) {
      filtered.push(result[i]);
    }
  }

  return filtered;
};

// mySize function:
const mySize = function (collection) {
  // check if collection is array or object

  let result = [];

  if (!Array.isArray(collection)) {
    // if object, use obj method to create array with obj values
    result = Object.values(collection);
  } else {
    result = collection;
  }

  let length = 0;
  while (result[length] !== undefined) {
    length++;
  }
  return length;
};

// myFirst function:
const myFirst = function (array, n) {
  const result = [];

  if (n === undefined) {
    return array[0];
  }

  // iterate over each index in the array
  for (let i = 0; i < n; i++) {
    // push value for index into copy
    result.push(array[i]);
  }

  return result;
};

// myLast function
const myLast = function (array, n) {
  const result = [];

  if (n === undefined) {
    return array[array.length - 1];
  }

  // iterate over each index in the array
  for (let i = array.length - n; i < array.length; i++) {
    // push value for index into copy
    result.push(array[i]);
  }

  return result;
};

// myKeys function

const myKeys = function (obj) {
  const result = [];

  // iterate over properties
  for (const key in obj) {
    result.push(key);
  }
  return result;
};

// myValues function

const myValues = function (obj) {
  const result = [];

  // iterate over properties
  for (const key in obj) {
    result.push(obj[key]);
  }
  return result;
};
