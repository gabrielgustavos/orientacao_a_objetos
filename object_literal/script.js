let rodas = 4
let portas = 4
let aro = 20
let tetoSolar = true;

let carro = {
    rodas,
    portas,
    aro,
    tetoSolar,
    bancoDeCouro: true,
    ligar() {
        console.log('ligou')
    },
    desligar: (() => console.log('desligou')
    )
}

console.log(carro)
console.log(carro.rodas)
carro.ligar()
carro.desligar()



let marca = 'DC'
let heroi = 'Flash'
let cor = 'Vermelho'

let objeto = {
    marca: marca,
    heroi: heroi,
    cor: cor
}

console.log(objeto.marca)