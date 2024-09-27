const number = [1, 2, 5, 10, 4, 7];
const newArr = [];
number.forEach((num) => {
  newArr.push(num * num);
  //   console.log(num * 2);
});
// console.log(newArr);

const total = number.reduce((acc, car) => acc + car);
// console.log(total);

const filterAll = number.filter((find) => {
  return find >= 9;
});
// console.log(filterAll);
// console.time("loop");
const findOne = number.find((find) => {
  return find === 2;
});
// console.log(findOne);
// console.timeEnd("loop");

const friends = ["Moushumi", "Misha", "Manna", "mimi", "mahiya"];

const lengths = friends.find((friend) => friend.length === 5);
// console.log(lengths);
const cube = (x) => x * x * x;
// console.log(cube(2));

const nums = [1, 2, 3, 4, 5];
let output = nums.filter((n) => n % 2);
// console.log(output);

const [a, b] = [1, 2, 3, 4, 45, 5];
// console.log(a + b);

const { x, y1, z } = { x: 1, y1: 2, z: 3 };
// console.log(y1);

function min(nums) {
  return Math.min(nums);
}
// console.log(min([1, 3, 2]));
const product = {
  name: "Laptop",
  model: "Yoga 3",
  price: 49000,
  dusk: "512SSD",
};

const { price } = product;

console.log(price);
