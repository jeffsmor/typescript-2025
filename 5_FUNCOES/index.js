"use strict";
// 1 - void
function withoutReturn() {
    console.log("Esta função não tem retorno!");
    // return 1
}
withoutReturn();
// callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(fn, userName) {
    console.log("Preparando a função");
    const greet = fn(userName);
    console.log(greet);
}
preGreeting(greeting, "Jefferson");
preGreeting(greeting, "Márcio");
// 3 - generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
// console.log(firstElement("Teste"))
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObject = mergeObjects({ name: "Jefferson" }, { age: 30, job: "Programmer" });
console.log(newObject);
// 4 - constraints
function biggestNumber(num1, num2) {
    let biggest;
    if (+num1 > +num2) {
        biggest = num1;
    }
    else {
        biggest = num2;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber("10", "5"));
// console.log(biggestNumber(true, false))
// 5 - especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays([7, 8, 9], ["teste1", "teste2", "teste3"]));
// 6 - parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}, tudo bem?`;
}
console.log(modernGreeting("Jefferson"));
console.log(modernGreeting("Pedro", "Dr."));
// 7 - parametros default
function sumDefault(a, b = 10) {
    return a + b;
}
console.log(sumDefault(5));
console.log(sumDefault(12, 15));
// 8 - unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("x é um número");
    }
}
doSomething([100, 2000, 3000]);
doSomething(10);
// 9 - never
function showErrorMessage(msg) {
    throw new Error(msg);
}
// showErrorMessage("Algum erro!")
// 10 - Rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(45, 29, 43));
// console.log(sumAll("teste"))
// 11 - destructuring como parametro
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e ele custa R$${price}`;
}
const shirt = { name: "Camisa", price: 49.99 };
console.log(showProductDetails(shirt));
// console.log(showProductDetails({ name: "test", age: 30 }))
// console.log(showProductDetails([1, 2]))
