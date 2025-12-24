// for
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("Конец работы");

let i = 0;
for (; i < 60; ) {
  console.log(i);
  i = i + 10;
}

// while
let x = 1;
while (x <= 5) {
  console.log(x);
  x++;
}

// do while
let m = 1;
do {
  console.log(m);
  m++;
} while (m <= 5);

// for in
const person = { name: "Tom", age: 37 };
for (prop in person) {
  console.log(prop);
}

// for of
const people = ["Tom", "Sam", "Bob"];
for (const person of people) {
  console.log(person);
}
