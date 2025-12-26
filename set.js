const set = new Set();

const s1 = new Set([1, 2, 2, 3, 3]);
console.log(s1);

const s2 = new Set([1, 2, 3]);
console.log(s2.size);

const s3 = new Set();
s3.add(1);
s3.add(1);
s3.add("a");
console.log(s3);
s3.has(1);
s3.has(10);
s3.delete(1);
s3.delete(5);
s3.clear();
console.log(s3.size);

const s4 = new Set(["a", "b", "c"]);
for (const value of s4) {
  console.log(value);
}

s4.forEach((value) => {
  console.log(value);
});

const arr = [1, 2, 2, 3, 3, 4];
const unique = [...new Set(arr)];
console.log(unique);

const s5 = new Set();
s5.add({ a: 1 });
s5.add({ a: 1 });
console.log(s5.size);

const a1 = new Set([1, 2, 3]);
const b1 = new Set([3, 4, 5]);
const union = new Set([...a1, ...b1]);
console.log(union);

const intersection = new Set([...a1].filter((x) => b1.has(x)));
console.log(intersection);

const difference = new Set([...a1].filter((x) => !b1.has(x)));
console.log(difference);
