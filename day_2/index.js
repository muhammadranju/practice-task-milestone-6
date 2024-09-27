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
console.time("loop");
const findOne = number.find((find) => {
  return find === 2;
});
// console.log(findOne);
console.timeEnd("loop");
