function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

const counter = outer();
counter();
counter();
counter();

function makeGreeting(name) {
  return function () {
    console.log("Привет, " + name);
  };
}
const greetTom = makeGreeting("Tom");
const greetAnna = makeGreeting("Anna");
greetTom();
greetAnna();

function createCounter() {
  let count = 0;
  return () => ++count;
}
const counter1 = createCounter();
counter1();
counter1();

function createUser() {
  let password = "12345";
  return {
    checkPassword(pwd) {
      return pwd === password;
    },
  };
}
const user = createUser();
console.log(user.checkPassword("12345"));

function attachHandler(id) {
  document.getElementById(id).onclick = function () {
    console.log("Clicked:", id);
  };
}

function person(name, age) {
  console.log("Person", name, "created");

  function print() {
    console.log("Person ", name, " (" + age + ")");
  }
  function work() {
    console.log("Person ", name, " works");
  }
  function incrementAge(value) {
    age = age + value;
  }
  return [print, work, incrementAge];
}

const tom = person("Tom", 39);
tom[0]();
tom[1]();
tom[2](1);
tom[0]();
