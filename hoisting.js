sayHi();
function sayHi() {
  console.log("Привет");
}

sayHi(); // TypeError
var sayHi = function () {
  console.log("Привет");
};

console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError
let b = 10;

foo(); // 2
var foo = function () {
  console.log("1");
};

function foo() {
  console.log("2");
}

const dog = new Dog(); // ReferenceError
class Dog {
  bark() {
    console.log("Гав");
  }
}
