//Clonar só o prototype em vez da instância do objeto

function Veiculo() {}

    Veiculo.prototype.carenagem = 'Aço'
    Veiculo.prototype.ligar = (() =>  console.log('O veiculo ligou'))


function Trem(tipo){
    this.tipo = tipo;
}

Trem.prototype.vagoes = 50;


function Carro(){}

Carro.prototype.pneus = 4;

// copiando apenas o prototype, em vez de instanciar uma classe
Trem.prototype = Veiculo.prototype;
Carro.prototype = Veiculo.prototype;

let tremBala = new Trem('Trem Bala')
let trem = new Trem('Trem')
let ferrari = new Carro()

trem.ligar()
tremBala.ligar()
ferrari.ligar()

console.log(tremBala.carenagem)


