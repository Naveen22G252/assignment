// 1. Increase Salary by 10%
let employee = { name: "Ramesh", age: 30, salary: 30000 };
employee.salary = employee.salary + (employee.salary * 10 / 100);
console.log(employee);

// 2. Final Price After Discount
let product = { name: "Laptop", price: 50000, discount: 10 };
product.finalPrice = product.price - (product.price * product.discount / 100);
console.log(product);

// 3. Total and Average Marks
let marks = { tamil: 80, english: 70, maths: 90, science: 85, social: 75 };
let total = 0;
let count = 0;

for (let m in marks) {
    total += marks[m];
    count++;
}
let average = total / count;
console.log(total, average);

// 4. Check Key Exists
let user = { name: "Arun", city: "Chennai", age: 24 };
if ("city" in user) {
    console.log(user.city);
} else {
    console.log("Not Found");
}

// 5. Delete Property
let car = { brand: "Honda", model: "City", year: 2021, color: "White" };
delete car.color;
console.log(car);

// 6. Total Fruits in Cart
let cart = { apple: 3, orange: 5, banana: 2 };
let sum = 0;

for (let fruit in cart) {
    sum += cart[fruit];
}
console.log(sum);

// 7. Object.entries()
let obj = { a: 10, b: 20, c: 30 };
let entries = Object.entries(obj);

for (let i = 0; i < entries.length; i++) {
    console.log(entries[i][0], entries[i][1]);
}

// 8. People Above 18
let people = [
    { name: "Ravi", age: 17 },
    { name: "Kumar", age: 25 },
    { name: "Siva", age: 19 }
];

for (let i = 0; i < people.length; i++) {
    if (people[i].age > 18) {
        console.log(people[i].name);
    }
}

// 9. Bank Account Methods
let bankAccount = {
    balance: 1000,
    deposit: function (amount) {
        this.balance += amount;
    },
    withdraw: function (amount) {
        this.balance -= amount;
    }
};

bankAccount.deposit(500);
bankAccount.withdraw(200);
console.log(bankAccount.balance);

// 10. Movie Rating Check
let movie = { title: "Avatar", rating: 8.5, year: 2009 };

if (movie.rating > 8) {
    console.log("Super Hit");
} else if (movie.rating >= 5) {
    console.log("Hit");
} else {
    console.log("Flop");
}
