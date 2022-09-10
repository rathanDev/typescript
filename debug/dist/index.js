"use strict";
console.log("Hello");
let age = 31;
if (age > 50) {
    console.log("old");
}
else {
    console.log("young");
}
const nums = [1, 2, 3, 4, 5];
const nums2 = nums.map((n) => n * 2);
console.log(nums2);
let one = { name: "x", age: 10 };
let two = { name: "y", age: 20 };
let three = { name: "z", age: 30 };
const list = [];
list.push(one);
list.push(two);
list.push(three);
console.log(list);
const map = list.reduce((map, e) => {
    map[e.name] = e.age;
    return map;
}, {});
console.log(map);
//# sourceMappingURL=index.js.map