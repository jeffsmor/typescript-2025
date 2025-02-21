// 1 - void
function withoutReturn(): void {
    console.log("Esta função não tem retorno!")
    // return 1
}

withoutReturn()

// callback como argumento
function greeting(name: string): string {
    return `Olá ${name}`
}

function preGreeting(fn: (name: string) => string, userName: string) {
    console.log("Preparando a função")

    const greet = fn(userName)

    console.log(greet)
}

preGreeting(greeting, "Jefferson")
preGreeting(greeting, "Márcio")

// 3 - generic function
function firstElement<T>(arr: Array<T>): T {
    return arr[0]
}

console.log(firstElement([1, 2, 3]))
console.log(firstElement(["a", "b", "c"]))
// console.log(firstElement("Teste"))

function mergeObjects<T, U>(obj1: T, obj2: U) {
    return {
        ...obj1,
        ...obj2,
    }
}

const newObject = mergeObjects({ name: "Jefferson" }, { age: 30, job: "Programmer" })
console.log(newObject)

// 4 - constraints
function biggestNumber<T extends number | string>(num1: T, num2: T): T {
    let biggest: T

    if (+num1 > +num2) {
        biggest = num1
    } else {
        biggest = num2
    }

    return biggest
}

console.log(biggestNumber(5, 3))
console.log(biggestNumber("10", "5"))
// console.log(biggestNumber(true, false))

// 5 - especificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2)
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]))
console.log(mergeArrays<number | string>([7, 8, 9], ["teste1", "teste2", "teste3"]))

// 6 - parametros opcionais
function modernGreeting(name: string, greet?: string): string {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`
    }

    return `Olá ${name}, tudo bem?`
}

console.log(modernGreeting("Jefferson"))
console.log(modernGreeting("Pedro", "Dr."))

// 7 - parametros default
function sumDefault(a: number, b = 10): number {
    return a + b
}

console.log(sumDefault(5))
console.log(sumDefault(12, 15))

// 8 - unknown
function doSomething(x: unknown) {
    if (Array.isArray(x)) {
        console.log(x[0])
    } else if (typeof x === "number") {
        console.log("x é um número")
    }
}

doSomething([100, 2000, 3000])
doSomething(10)

// 9 - never
function showErrorMessage(msg: string): never {
    throw new Error(msg)
}

// showErrorMessage("Algum erro!")

// 10 - Rest operator
function sumAll(...n: Array<number>): number {
    return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 3, 4, 5))
console.log(sumAll(45, 29, 43))
// console.log(sumAll("teste"))

// 11 - destructuring como parametro
function showProductDetails({ name, price }: { name: string; price: number }): string {
    return `O nome do produto é ${name} e ele custa R$${price}`
}

const shirt = { name: "Camisa", price: 49.99 }

console.log(showProductDetails(shirt))
// console.log(showProductDetails({ name: "test", age: 30 }))
// console.log(showProductDetails([1, 2]))
