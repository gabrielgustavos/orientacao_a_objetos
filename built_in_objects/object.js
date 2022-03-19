// Pai de todos os objetos do javascript
// Possui propriedades e metodos, mesmo o objeto estando vazio
// Pode ser criado via new

let o = new Object()
console.log(o.toString()) // Representa o objeto em formato string
console.log(o.valueOf()) // Retorna o próprio objeto

let o1 = {}
let o2 = new Object()
console.log(o1)
console.log(o2)
// Output no console => Tanto o1 quanto o2 são objetos 

o1.nome = 'Gabs'
o2.nome = 'Jorge'

console.log(o1.valueOf())
console.log(o2.valueOf())
//Output no console => retornara Gabs e Jorge respectivamente dentro de um objeto

