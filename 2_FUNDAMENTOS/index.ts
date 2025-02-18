// numbers
let x: number = 10

console.log(x)
console.log(typeof x)

const y: number = 15.584848

console.log(y)
console.log(y.toPrecision(3))
console.log(typeof y)

// strings
const firstName: string = "Jefferson"

console.log(firstName.toLocaleUpperCase())

let fullName: string

const lastName: string = "Moreira"

fullName = firstName + " " + lastName

console.log(fullName)
console.log(typeof fullName)

// boolean
let a: boolean = false

console.log(a)
console.log(typeof a)

a = true

console.log(a)

// annotation e inference

let ann: string = "Hello World"

let inf = "Hello World"

// erros
// ann = 1
// inf = 1

console.log("Testando...")
