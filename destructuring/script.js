//Possível criar várias variáveis em uma só linha, desestruturando um objeto Linha: 10

// let carro = {
//     portas: 4,
//     aro: 20,
//     tetoSolar: true,
//     banco: 'couro'
// }

// let {portas, aro, tetoSolar, banco} = carro

// console.log(portas)
// console.log(aro)
// console.log(banco)
// console.log(tetoSolar)
// console.log(carro)

// Possível alterar o valor de variáveis já criadas

// let carro = {
//     portas: 4,
//     aro: 20,
//     tetoSolar: true,
//     banco: 'couro'
// }

// let portas = 0;

// ({portas} = carro)

// console.log(portas) // 4

// ===>> Pode ser usado com arrays

let frutas = [
    'bananas',
    'laranja',
    'maçã'
]

let [banana, l, m] = frutas

console.log(banana, l, m)
console.log(frutas)

let caminhao = {
  eixos: 2,
  rodas: 12,
  portas: 2,
  combustivel: 'diesel',
  carga: 'animais'
}

let {eixos, rodas, portas, combustivel, carga} = caminhao

console.log(eixos, rodas, portas, combustivel, carga)