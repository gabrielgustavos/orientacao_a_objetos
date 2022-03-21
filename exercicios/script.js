class adress {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua,
        this.bairro = bairro,
        this.cidade = cidade,
        this.estado = estado;
    }
}

let newAdress = new adress('Acre', 'Ipiranga', 'Acre', 'SP')

console.log(newAdress)

function compareObjs(obj1, obj2){ //Naruto e Ninja
    obj1 instanceof obj2 ? console.log(`O objeto ${obj1.nome} é uma instancia de ${obj2.name}`)
    : console.log(`O objeto ${obj1.nome} não é uma instância de ${obj2.name}`)
}

function Ninja(nome, qtd) {
    this.nome = nome
    this.estoqueShruiken = qtd;
    
    this.atirarShuriken = function(inimigo) {
        if(this.estoqueShruiken > 0) {
            console.log('O ninja atirou a shuriken')
            this.estoqueShruiken -= 1;
            inimigo.vivo = false;
        } else {
            console.log('Naruto não possui mais shurikens para jogar!')
        }
    }
} 

function Inimigo(nome) {
    this.nome = nome;
    this.vivo = true;
}

let orochimaru = new Inimigo('Orochimaru')

let naruto = new Ninja('Naruto', 3)

console.log(naruto)
console.log(orochimaru)
naruto.atirarShuriken(orochimaru)
console.log(orochimaru)

compareObjs(naruto, Ninja)

class Carro {
    constructor(marca, cor, gasolinaRestante, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante
        this.consumo = consumo
    }

    dirigir(km) {

        let litrosConsumidos = km / this.consumo;
        
        this.gasolinaRestante -= litrosConsumidos;

    }

    abastecer(l) {

        this.gasolinaRestante += 1;

    }
}

let carro = new Carro('VW', 'Cinza', 100, 14);

console.log(carro)
carro.dirigir(100);
console.log(carro)
carro.abastecer(100)
console.log(carro)




class Conta {
    constructor(saldoCC, saldoCP, juros) {
        this.saldoCC = saldoCC
        this.saldoCP = saldoCP
        this.juros = juros
    }

    deposito(valor){
        this.saldoCC += valor;
    }

   saque(valor){
        this.saldoCC -= valor;
    }

    transferenciaCP(valor) {
        this.saldoCC -= valor;
        this.saldoCP += valor;
    }

    transferenciaCC(valor) {
        this.saldoCP -= valor;
        this.saldoCC += valor;
    }

    jurosDeAniversario() {
        let juros = (this.saldoCP * this.juros) / 100;
        this.saldoCP += juros
    }

}

class ContaEspecial extends Conta {
    constructor(saldoCC, saldoCP, juros){
        super(saldoCC, saldoCP, juros*2)
    }
}

let conta = new Conta(1000, 5000, 1)

console.log(conta)

conta.saque(500)

console.log(conta)

conta.deposito(5000)

console.log(conta)

conta.transferenciaCP(3000)

console.log(conta)

conta.jurosDeAniversario()

console.log(conta)

let conta2 = new ContaEspecial(10000, 50000, 1)

console.log(conta2)

conta2.saque(5000)

console.log(conta2)

conta2.jurosDeAniversario()

console.log(conta2)

class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua) {
        this.rua = novaRua
    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro
    }

    set novaCidade(novaCidade) {
        this.cidade = novaCidade
    }

    set novoEstado(novoEstado) {
        this.estado = novoEstado
    }

}

let endereco = new Endereco('Rua acre', 'Ipiranga', 'São paulo', 'SP')

console.log(endereco)

endereco.novaRua = 'Rua do paraiso'

console.log(endereco)

endereco.novoBairro = 'Dom Miele'

console.log(endereco)

endereco.novaCidade = 'São José'

console.log(endereco)

endereco.estado = 'RJ'

console.log(endereco)
