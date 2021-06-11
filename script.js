'use strict';

// *****************************************
// 1. Question #1: Array Sort Comparison
// *****************************************

const array1 = ['a', 'b', 'c'];
const array2 = ['c', 'b', 'a'];

// console.log(array1.sort()); // (3) ["a", "b", "c"]
// console.log(array2.sort()); // (3) ["a", "b", "c"]

// the `sort()` method sorts the original array and returns a reference to the same object, so `array1.sort()` is actually a reference to the same object as `array1`.

// console.log(array1.sort() === array1);  //true
// console.log(array2 === array2.sort());  //true

// For the third output, `array1.sort() === array2.sort()`, even though the elements on each one of the arrays are the same, the === operator will not test the elements of the array but the reference of each object, which in this case is different, and thus returning false.
// console.log(array1.sort() === array2.sort());   //false

//Reference: https://livecodestream.dev/post/stranger-things-javascript-edition/
