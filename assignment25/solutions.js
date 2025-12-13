// 1. Loop + Condition
let numbers = [10, 22, 35, 40, 18, 28];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0 && numbers[i] > 20) {
        console.log(numbers[i]);
    }
}

// 2. Loop + Accumulator
let marks = [35, 50, 80, 20, 40, 90];
let pass = 0;
let fail = 0;

for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 40) {
        pass++;
    } else {
        fail++;
    }
}

console.log("Passed:", pass);
console.log("Failed:", fail);

// 3. Nested Loop Pattern
let n = 4;
for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += j + " ";
    }
    console.log(line);
}

// 4. Loop Through Array of Objects
let products = [
    { name: "Pen", price: 20 },
    { name: "Book", price: 80 },
    { name: "Bag", price: 500 }
];

for (let i = 0; i < products.length; i++) {
    if (products[i].price < 100) {
        console.log(products[i].name);
    }
}

// 5. Transform Using Loop
let arr = [2, 4, 6, 8];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 3);
}

console.log(newArr);
