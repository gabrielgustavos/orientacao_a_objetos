let pessoa = {
    nome: 'Matheus',
    idade: 29,
    falar: (() => console.log('Hi, my name is Matheus')
    ),
    aniversario() {
        this.idade += 1
    },
    dizerIdade(){
        console.log(`My age is ${this.idade}`)
    },
    podeDirigir: function(){
        this.idade >= 18 ? console.log('U can drive') : console.log('U cant drive');
    }
}

pessoa.aniversario()
console.log(pessoa.idade)
pessoa.aniversario()
console.log(pessoa.idade)
pessoa.dizerIdade()

pessoa.podeDirigir()

let calculadora = {
    numeros: 0,
    somar: function(a, b) {
        this.numeros = a + b
    },
    subtracao: function(a) {
        this.numeros -= a;
    }
}

calculadora.somar(2, 4)
console.log(calculadora.numeros)
calculadora.subtracao(5)
console.log(calculadora.numeros)