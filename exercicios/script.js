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
//

