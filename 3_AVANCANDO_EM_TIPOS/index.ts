// 1 - arrays

let numbers: number[] = [1, 2, 3]

numbers.push(4)

console.log(numbers[2])

// numbers = "teste"

const nomes: string[] = ["Jefferson", "Moreira"]

// nomes.push(4)

// 2 - another array sintaxe
const nums: Array<number> = [100, 200]

nums.push(300)

console.log(nums)

console.log(nums[0])

// 3 - any

const arr1: any = [1, "teste", true, [], { name: "Jefferson" }]

console.log(arr1)

arr1.push([1, 2, 3])

console.log(arr1)

// 4 - parametros tipados
function sum(number1: number, number2: number) {
    console.log(`A soma de ${number1}+${number2} é igual a ${number1 + number2}`)
}

sum(100, 2)

// sum("1", "2")

// 5 - retorno de função
function greeting(name: string): string {
    return `Olá ${name}!`
}

console.log(greeting("Jefferson"))

// 6 - função anonima
setTimeout(function () {
    const sallary: number = 1000

    // console.log(parseFloat(sallary)))

    // console.log(sallary)
}, 2000)

// 7 - tipos de objeto
function passCoordenates(coord: { x: number; y: number }) {
    console.log(`X: ${coord.x}, Y: ${coord.y}`)
}

const objCoord = {
    x: 10,
    y: 20,
}

passCoordenates(objCoord)
// passCoordenates({ name: 100, sobrenome: 200 })

// 8 - props opcionais
function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a)
    console.log("B: " + b)

    if (c) {
        console.log("C: " + c)
    }
}

showNumbers(1, 2, 3)
showNumbers(4, 5)
// showNumbers(6)

// 9 - validando argumentos opcionais
function advancedGreeting(firstName: string, lasName?: string) {
    if (lasName !== undefined) {
        return `Olá, ${firstName} ${lasName}, tudo bem?`
    }

    return `Olá, ${firstName}, tudo bem?`
}

console.log(advancedGreeting("Jefferson", "Moreira"))
console.log(advancedGreeting("Márcio"))

// 10 - Union Type
function showBalance(balance: string | number) {
    console.log(`O saldo da conta é ${balance}`)
}

showBalance("1000")
showBalance(500)
// showBalance(true)

const arr2: Array<number | string | boolean> = [1, "teste", true]

// 11 - Avançando em Union Types
function showUserRole(role: boolean | string) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!"
    }

    return `A função do usuário é ${role}!`
}

console.log(showUserRole(false))
console.log(showUserRole("admin"))

// 12 - type alias
type ID = string | number

function showId(id: ID) {
    console.log(`O ID é ${id}`)
}

showId(1)
showId("200")

// 13 - interfaces
interface IPoint {
    x: number
    y: number
    z: number
}

function showCoords(obj: IPoint) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const objCoord2: IPoint = {
    x: 10,
    y: 15,
    z: 20,
}

showCoords(objCoord2)

// 14 - interface x type alias
interface IPerson {
    name: string
}

interface IPerson {
    age: number
}

const somePerson: IPerson = { name: "Jefferson", age: 43 }

console.log(somePerson)

type personType = {
    name: string
}

// type personType = {
//     age: number
// }

// 15 - literal types
let test: "testando"

test = "testando"

console.log(test)

function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é ${direction}`)
}

showDirection("center")
// showDirection("top")

// 16 - non null assertion operator
const p = document.querySelector("#some-p")

console.log(p!.textContent)

// 17 - bigint
let n: bigint

// n = 1

n = 1000n

console.log(n + 100n)

// 18 - Symbol
let symbolA: symbol = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)
