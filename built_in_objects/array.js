//Objeto pai de todos os arrays
// Pode instanciar um array com new
// Também possui propriedades e metodos

let a = [0, 1, 2]
let b = new Array(3,4,5)

console.log(a)
console.log(b)

console.log(a.toString())
console.log(b.toString())

console.log(a instanceof Array) //True
console.log(b instanceof Array) // True
console.log(b instanceof Object) // True
console.log(Array instanceof Object) //True

