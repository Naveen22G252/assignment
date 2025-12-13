// 1
let student = { name: "Arun", age: 20, grade: "A" };
console.log(student.name, student.age, student.grade);

// 2
let car = { brand: "Toyota", model: "Innova", year: 2022 };
console.log(car.brand);

// 3
let mobile = { brand: "Samsung", model: "S21", price: 50000 };
mobile.color = "Black";
console.log(mobile);

// 4
let book = { title: "JS Basics", price: 300 };
book.price = 450;
console.log(book);

// 5
let employee = { name: "Ravi", role: "Developer" };
console.log("salary" in employee);

// 6
let product = { name: "Shoes", price: 2000, discount: 10 };
delete product.discount;
console.log(product);

// 7
let user = { name: "Kiran", email: "kiran@gmail.com" };
for (let key in user) {
    console.log(key);
}

// 8
let dog = { breed: "Labrador", age: 1 };
if (dog.age < 2) {
    console.log("Puppy");
}

// 9
let calculator = { a: 10, b: 20 };
console.log(calculator.a + calculator.b);

// 10
let person = { firstName: "Ajay", lastName: "Kumar" };
console.log(person.firstName + " " + person.lastName);

// 11
let marks = { tamil: 80, english: 70, maths: 90, science: 85, social: 75 };
let total = 0;
for (let m in marks) {
    total += marks[m];
}
console.log(total);

// 12
let bike = { brand: "Royal Enfield", model: "Classic 350" };
console.log("color" in bike);

// 13
let movie = { title: "Movie A", rating: 9 };
if (movie.rating > 8) {
    console.log("Hit");
}

// 14
let account = { balance: 1000 };
account.balance += 500;
console.log(account.balance);

// 15
let player = { speed: 80, strength: 90, stamina: 85 };
let max = 0;
for (let stat in player) {
    if (player[stat] > max) {
        max = player[stat];
    }
}
console.log(max);

// 16
let game = { name: "Chess", players: 2, type: "Board" };
console.log(Object.keys(game).length);

// 17
let course = { name: "JavaScript", duration: "2 months" };
course.duration = "3 months";
console.log(course);

// 18
let teacher = { name: "Meena", subject: "Maths" };
console.log(teacher.name + " teaches " + teacher.subject);

// 19
let settings = { theme: "light", fontSize: 14 };
settings.theme = "dark";
console.log(settings);

// 20
let shopItem = { name: "Bag", price: 150 };
if (shopItem.price > 100) {
    console.log("Expensive");
} else {
    console.log("Cheap");
}
