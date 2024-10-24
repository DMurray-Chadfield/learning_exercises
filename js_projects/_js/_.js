let _ = {
    clamp(number, lower, upper) {
      let lowerClampedValue = Math.max(number, lower);
      let clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
    inRange(number, start, end) {
      if (typeof end === 'undefined') {
        end = start;
        start = 0;
      }
      if (start > end) {
        let holder = end;
        end = start;
        start = holder;
      }
      return number >= start && number < end;
    },
    words(string) {
      let array = string.split(' ');
      return array;
    },
    pad(string, length) {
      if (length <= string.length) {
        return string;
      }
      let startPaddingLength = Math.floor((length - string.length)/2);
      let endPaddingLength = length - string.length - startPaddingLength;
      let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
      return paddedString;
    },
    has(object, key) {
      let hasKey = object[key] !== undefined;
      return hasKey;
    },
    invert(object) {
      let keys = Object.keys(object);
      let values = Object.values(object);
      let holder = keys;
      keys = values;
      values = holder;
      let newObject = Object();
      for (let i = 0; i < keys.length; i++) {
        newObject[keys[i]] = values[i];
      }
      return newObject;
    },
    findKey(object, predicate) {
      let keys = Object.keys(object);
      for (let i = 0; i < keys.length; i++) {
        if (predicate(object[keys[i]])) {
          return keys[i];
        }
      }
      return undefined;
    },
    drop(array, number) {
      if (number === undefined) {
        number = 1;
      }
      let targetLength = array.length - number;
      while (array.length > targetLength) {
        array.shift();
      }
      return array;
    },
    dropWhile(array, predicate) {
      let index = -1;
      for (let i = 0; i < array.length; i++) {
        if (!predicate(array[i], i, array)) {
          break;
        }
        index = i;
      }
      let number = index + 1;
      let targetLength = array.length - number;
      while (array.length > targetLength) {
        array.shift();
      }
      return array;
    },
    chunk(array, size) {
      if (size === undefined) {
        size = 1;
      }
      let newArray = [];
      for (let counter = 0; counter < array.length; counter += size) {
        let arrayChunk = array.slice(counter, counter + size);
        newArray.push(arrayChunk);
      }
      return newArray;
    }
  };
  
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;