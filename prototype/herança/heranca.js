function Veiculo() {}

    Veiculo.prototype.carenagem = 'Aço'
    Veiculo.prototype.ligar = (() =>  console.log('O veiculo ligou'))


function Trem(tipo){
    this.tipo = tipo;
}

Trem.prototype.vagoes = 50;


function Carro(){}

Carro.prototype.pneus = 4;

Trem.prototype = new Veiculo();
Carro.prototype = new Veiculo();

let tremBala = new Trem('Trem Bala')
let trem = new Trem('Trem')

trem.ligar()
tremBala.ligar()
