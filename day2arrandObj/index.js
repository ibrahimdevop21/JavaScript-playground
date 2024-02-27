// //! Array Basics
// // let x;

// // // Array literals
// // const numbers = [12, 45, 33, 39, 102];
// // mixed = [
// //   'string',
// //   34,
// //   true,
// //   undefined,
// //   null,
// //   {
// //     name: 'john',
// //     age: 34,
// //   },
// // ];

// // // Array constructor
// // const fruites = new Array('Apple', 'Banana', 'Orange');

// // x = numbers[0];
// // x = numbers[0] + numbers[2];
// // x = `i hate ${fruites[1]}, and i love ${fruites[2]}`;
// // x = numbers.length;
// // fruites[1] = 'mango';
// // x = fruites;

// // // fruites.length = 2;
// // // x = fruites;

// // fruites[fruites.length] = 'pineapple'; //adding element based on the length of the array like saying push this item at this position which is the length of the array
// // fruites[fruites.length] = 'grapes';
// // fruites[fruites.length] = 'mango';
// // x = fruites; // array

// // console.log(x);

// //! Array Methods
// // let x;

// // const arr = [34, 55, 95, 20, 15];

// // arr.push(100);

// // arr.pop(100);

// // arr.unshift(200);

// // arr.shift();

// // // arr.reverse();

// // x = arr.includes(54);

// // x = arr.indexOf(54545);

// // x = arr.slice(1, 4);

// // x = arr.splice(1, 3, 'hello', 'bye');

// // x = arr.slice(1, 3);

// // x = arr.splice(1, 4).reverse().toString().charAt(0); // chining methods in arrays

// // console.log(x, arr);

// //! Array Nesting Concat & Spread
// let x;
// const fruits = ['apple', 'mango', 'orange'];
// const barries = ['strawberry', 'raspberry', 'blueberry'];

// // fruits.push(barries);

// // x = fruits[3][2];

// const allFfruits = [fruits, barries];

// // x = allFfruits[1][0];
// x = fruits + barries; // concatenation operator will result on string

// x = fruits.concat(barries); // concatenation operator will result on array
// x = [...fruits, ...barries]; // spread operator will result on array just like concat method but it's more prefered becuse it's ES

// // Flatten Arrays
// const arr = [1, 2, [3, 4], [5, 6], 7, 8];
// x = arr.flat();

// // Static Method on array object
// x = Array.isArray('arr');

// x = Array.from('12345');

// const a = 1;
// const b = 2;
// const c = 3;

// x = Array.of(a, b, c); // static method on array object to create an array of given elements

// console.log(x);
// const arr = [1, 2, 3, 4, 5];

// arr.unshift(0);
// arr.push(6);
// arr.reverse();

// x = arr.unshift(0).push(6).reverse();
// console.log(arr);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

let x;
// x = [...arr1, ...arr2.splice(1, 5)];
x = [...arr1, ...arr2.slice(1, 6)];
console.log(x);
