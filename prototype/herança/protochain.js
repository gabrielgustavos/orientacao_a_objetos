function Veiculo() {
    this.carenagem = 'Aço'
    this.ligar = (() =>  console.log('O veiculo ligou'))
}

function Trem(tipo){
    this.tipo = tipo;
    this.vagoes = 50;
}

Trem.prototype = new Veiculo();

let tremBala = new Trem('Trem Bala')

tremBala.ligar() // O veiculo ligou
console.log(tremBala.carenagem) // Aço

//Trem herdou as heranças(propriedades) de Veiculo e transmitiu para tremBala
//Quando utilizamos proto chain, o objeto vira instância de todos os 'pais'

//Como posso checar a herança?

console.log(Veiculo instanceof Trem) // False
console.log(Trem instanceof Veiculo) // False
console.log(tremBala instanceof Veiculo) // True
console.log(tremBala instanceof Trem) // True

tremBala instanceof Veiculo === true ? console.log('ok') : console.log('not ok')

// O problema do prototype chain

// A mudança do prototype, toda a cadeia que o utiliza é alterada também
//Apenas utilize quando não for necessário fazer alterações em prop/metodos
