"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e se preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponível!");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true,
};
showProductDetails(shirt);
showProductDetails({ name: "Tênis", price: 129.99, isAvailable: false });
function showuserDetails(user) {
    console.log(`O usuário tem o email: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const user1 = { email: "das@das.com", role: "Admin" };
const user2 = { email: "zas@zas.com" };
showuserDetails(user1);
showuserDetails(user2);
const fusca = {
    brand: "VW",
    wheels: 4,
};
console.log(fusca);
let coords = {
    x: 10,
};
coords.y = 15;
console.log(coords);
const myself = {
    name: "Jefferson",
    age: 40,
};
console.log(myself);
const goku = {
    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "Genki Dama"],
};
console.log(goku);
console.log(goku.superpowers[1]);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12,
};
console.log(arnold);
console.log(arnold.caliber);
// 7 - readonly array
let myArray = ["Maça", "Laranja", "Maça"];
// myArray[3] = "Mamão"
console.log(myArray);
myArray.forEach(item => {
    console.log(`Fruta: ${item}`);
});
myArray = myArray.map(item => {
    return `Fruta: ${item}`;
});
console.log(myArray);
// number[]
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5,6]
// const mixedArray: fiveNumbers = [1, true, "teste", 4, 5, 6]
console.log(myNumberArray);
const anotherUser = ["Jefferson", 40];
console.log(anotherUser[0]);
anotherUser[0] = "João";
console.log(anotherUser[0]);
// anotherUser[1] = "teste"
// 9 - tuplas com readonly
function showNumbers(numbers) {
    // numbers[0]=10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
