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

// *****************************************
// Question #2: Object Mutability
// *****************************************

//  the method `Object.freeze()` we freeze the object, meaning that the object cannot longer be changed.
// Freezing an object prevents new properties from being added to it, existing properties from being removed or changed.

const user = {
  name: 'Juan',
  address: {
    state: 'CA',
    city: 'Los Angeles'
  }
};

user.name = 'Victoria';

// console.log(user.name); // Victoria

//Freeze user
Object.freeze(user);

user.name = 'Brenda';
// console.log(user.name); // Victoria (no change)

// But ...
user.address.city = 'San Diego';
// console.log(user.address.city); // San Diego
// (why changed even after freezing the object?)

// *** Answer: ***
// For all purposes in the variable `user`, `address` is a reference to an object, and that reference remains the same throughout the code. We did change one attribute inside the `address` object, but that doesn’t change the reference to the object itself.

('use strict');

Object.freeze(user);
user.name = 'Barbara';

// In strict mode, if we try to modify a frozen object we get a TypeError.

// Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>' at <anonymous>:1:27
