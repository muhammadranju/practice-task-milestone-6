function showThis() {
  //   obj = {
  //     name: "abc",
  //     age: 40,
  //   };
  console.log(this.obj);
}
const obj = { name: "abc", age: 40 };
// showThis.call({ obj });

function myName(name) {
  console.log("Hello", name + "!");
}

function sayHello(fn, name) {
  fn(name);
}

// sayHello(myName, "Ranju");

function a(a, b, c) {
  const args = [...arguments];
  console.log(args);
}

// a(1, 2, 3, 4, 5);
let p = "Javascript";
let q = p;
p = "React";
// console.log(q);

const isTrue = true;
// console.log(!isTrue ? "hello" : "world");

const sum = (p, q) => {
  p + q;
};
const result = sum(2, 3);
// console.log(result);

if ("2" === 2) {
  console.log("Inside if");
} else {
  //   console.log("Inside else");
}

function work(x, y = 4) {
  names = "Ranju";
  return x + y;
}
// console.log(work(32));
work();

console.log(names);
