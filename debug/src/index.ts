console.log("Hello");

let age: number = 31;
if (age > 50) {
  console.log("old");
} else {
  console.log("young");
}

const nums: number[] = [1, 2, 3, 4, 5];

const nums2 = nums.map((n) => n * 2);
console.log(nums2);

interface I {
  name: string;
  age: number;
}

let one: I = { name: "x", age: 10 };
let two: I = { name: "y", age: 20 };
let three: I = { name: "z", age: 30 };

const list: I[] = [];
list.push(one);
list.push(two);
list.push(three);

console.log(list);

const map  = list.reduce((map:any, e:I) => {
    map[e.name] = e.age;
    return map;
}, {});

console.log(map)









