// Тернарная операция
const a = 1;
const b = 2;
const result = a < b ? a : b;
console.log(result);

const a2 = 1;
const b2 = 2;
const result2 = a2 < b2 ? a2 + b2 : a2 - b2;
console.log(result2);

// Оператор ??
const result1 = "hello" ?? "world";
console.log(result1); // hello

console.log(0 ?? 5); // 0

console.log("" ?? "javascript"); // ""

console.log(false ?? true); // false

console.log(null ?? "not null"); // not null

console.log(undefined ?? "defined"); // defined

console.log(null ?? null); // null
console.log(undefined ?? undefined); // undefined

// Оператор ??=
const message1 = "Hello JavaScript";
let text1 = "Hello work!";
text1 ??= message1;
console.log(text1); // Hello work!

const message2 = "Hello JavaScript";
let text2 = null;
text2 ??= message2;
console.log(text2); // Hello JavaScript
