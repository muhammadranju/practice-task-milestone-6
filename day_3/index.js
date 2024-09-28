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

sayHello(myName, "Ranju");
