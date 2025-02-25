// 1 - tipo de objeto para funnção com interface
interface Product {
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product: Product): void {
    console.log(`O nome do produto é ${product.name} e se preço é R$${product.price}`)

    if (product.isAvailable) {
        console.log("O produto está disponível!")
    }
}

const shirt: Product = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true,
}

showProductDetails(shirt)
showProductDetails({ name: "Tênis", price: 129.99, isAvailable: false })

// 2 - propriedade opcional em interface
interface User {
    email: string
    role?: string
}

function showuserDetails(user: User): void {
    console.log(`O usuário tem o email: ${user.email}`)

    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`)
    }
}

const user1: User = { email: "das@das.com", role: "Admin" }
const user2: User = { email: "zas@zas.com" }

showuserDetails(user1)
showuserDetails(user2)

// 3 - readonly
interface Car {
    brand: string
    readonly wheels: number
}

const fusca: Car = {
    brand: "VW",
    wheels: 4,
}

console.log(fusca)

// fusca.wheels = 5

//  4 - index signature
interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10,
}

coords.y = 15

console.log(coords)

// coords.z = "teste"

// 5 - extending interfaces
interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const myself: Human = {
    name: "Jefferson",
    age: 40,
}

console.log(myself)

const goku: SuperHuman = {
    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "Genki Dama"],
}

console.log(goku)
console.log(goku.superpowers[1])

// 6 - intersection types
interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12,
}

console.log(arnold)
console.log(arnold.caliber)

// 7 - readonly array
let myArray: ReadonlyArray<string> = ["Maça", "Laranja", "Maça"]

// myArray[3] = "Mamão"

console.log(myArray)

myArray.forEach(item => {
    console.log(`Fruta: ${item}`)
})

myArray = myArray.map(item => {
    return `Fruta: ${item}`
})

console.log(myArray)

// 8 - tuplas
type fiveNumbers = [number, number, number, number, number]

// number[]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5,6]
// const mixedArray: fiveNumbers = [1, true, "teste", 4, 5, 6]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ["Jefferson", 40]

console.log(anotherUser[0])

anotherUser[0] = "João"

console.log(anotherUser[0])
// anotherUser[1] = "teste"

// 9 - tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
    // numbers[0]=10
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([1, 2])
