const map1 = new Map();

const map2 = new Map([
  ["name", "Аня"],
  ["age", 22],
]);

console.log(map2.size);
map2.set("city", "Moscow");
map2.set("age", 23);
map2.set("a", 1).set("b", 2);
map2.get("name");
map2.has("age");
map2.has("job");
map2.delete("age");
map2.clear();
console.log(map2.size);

for (const [key, value] of map2) {
  console.log(key, value);
}

map2.forEach((value, key) => {
  console.log(key, value);
});

for (const key of map2.keys()) {
  console.log(key);
}

for (const value of map2.values()) {
  console.log(value);
}

for (const entry of map2.entries()) {
  console.log(entry);
}
