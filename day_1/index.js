// const money = 25;

// const rich = money * 2;
// console.log(rich);

// const arrow = () => "it's working 🔥😲";

// console.log(arrow());
// return;

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const num2 = [...num];
// num2.push(11);
// // console.log(num2);
// // console.log(num);

// console.table({ num, num2 });

// const glass = {
//   name: "coffee",
//   color: "red",
//   price: 10,
//   quantity: 10,
// };

// console.log(glass);

// // give me the keys
// const keys = Object.keys(glass);
// console.log(keys);

// // give me the values
// const values = Object.values(glass);
// console.log(values);

// // give me the entries
// const entries = Object.entries(glass);
// console.log(entries);

// const freeze = Object.freeze(glass);
// console.log(freeze);
// glass.name = "tea";
// console.log(glass);

// const glass = {
//   name: "coffee",
//   color: "red",
//   price: 10,
//   quantity: 10,
// };

// for (const key in glass) {
//   console.log(key);
// }

// // this is not working 😲 only the default way
// // for (const value of glass) {
// //   console.log(value);
// // }

// for (const [key, value] of Object.entries(glass)) {
//   console.log(key, value);
// }

// task 1
const multiply = (a, b, c) => a * b * c;
// console.log(multiply(2, 3, 4));

// task 2
const me = "I amd a web developer";
const isDo = "I love to code";
const loveEat = "I love to eat buryani";

const about = `${me} ${isDo} ${loveEat}`;
// console.log(about);

// task 3
const add = (num1, num2 = 5) => num1 + num2;
// console.log(add(2));

// task 5
const findMax = (arr1, arr2) => {
  const newArr = [...arr1, ...arr2];
  console.log(newArr);
  return Math.max(...newArr);
};
// console.log(findMax([1, 5, 9, 2, 3, 4], [25, 14, 655, 48]));

// const name = "Hero";
// // const greetings = `Welcome Home! ${name}`;

// const greetings = "Welcome Home!" + " " + name;
// console.log(greetings);

// let a = 12,
//   b = 3;
// [a, b] = [b, a];

// console.log(a, b);

// const obj = { foo: 1 };
// obj.bar = 2;
// console.log(obj);
// const numbers = [45, 12, 36, 84];
// numbers.push(25);
// console.log(numbers);

const countLength = (array) => {
  const newArr = [];
  for (let arr of array) {
    if (arr.length % 2 === 0) {
      newArr.push({ name: arr, count: arr.length });
    }
  }
  return newArr;
};
console.log(countLength(["Ranju", "Amin", "Hossain", "MD"]));
