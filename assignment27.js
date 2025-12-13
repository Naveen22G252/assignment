// 1. Highest and Lowest
let marks = [45, 78, 23, 90, 56];
let highest = marks[0];
let lowest = marks[0];

for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) {
        highest = marks[i];
    }
    if (marks[i] < lowest) {
        lowest = marks[i];
    }
}
console.log(highest, lowest);

// 2. Merge Two Arrays
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let merged = [];

for (let i = 0; i < a1.length; i++) {
    merged.push(a1[i]);
}
for (let i = 0; i < a2.length; i++) {
    merged.push(a2[i]);
}
console.log(merged);

// 3. Count Names Starting with A
let names = ["Arun", "Bala", "Ajay", "Kiran", "Anu"];
let countA = 0;

for (let i = 0; i < names.length; i++) {
    if (names[i][0] === "A") {
        countA++;
    }
}
console.log(countA);

// 4. Numbers Greater Than 50
let nums = [10, 60, 45, 80, 30, 90];
let greater = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 50) {
        greater.push(nums[i]);
    }
}
console.log(greater);

// 5. Reverse Array Manually
let arr = [10, 20, 30, 40, 50];
let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}
console.log(reversed);

// 6. Convert to Uppercase
let words = ["js", "html", "css"];
let upper = [];

for (let i = 0; i < words.length; i++) {
    upper.push(words[i].toUpperCase());
}
console.log(upper);

// 7. Divide by 5
let numbers = [5, 10, 15, 20, 25];
let divided = [];

for (let i = 0; i < numbers.length; i++) {
    divided.push(numbers[i] / 5);
}
console.log(divided);

// 8. Age Categories
let ages = [10, 25, 65, 40, 70, 15];
let below18 = 0;
let between18and60 = 0;
let above60 = 0;

for (let i = 0; i < ages.length; i++) {
    if (ages[i] < 18) {
        below18++;
    } else if (ages[i] <= 60) {
        between18and60++;
    } else {
        above60++;
    }
}
console.log(below18, between18and60, above60);

// 9. Age Above 18
let people = [
    { name: "Ravi", age: 16 },
    { name: "Akash", age: 22 },
    { name: "Mani", age: 30 }
];

for (let i = 0; i < people.length; i++) {
    if (people[i].age > 18) {
        console.log(people[i].name);
    }
}

// 10. Only Numbers
let mixed = [10, "hello", true, 50, "js", 99];
let onlyNumbers = [];

for (let i = 0; i < mixed.length; i++) {
    if (typeof mixed[i] === "number") {
        onlyNumbers.push(mixed[i]);
    }
}
console.log(onlyNumbers);
