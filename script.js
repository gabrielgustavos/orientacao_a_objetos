function Ninja(nome, qtd){
    this.nome = nome;
    this.estoqueShruiken = qtd;
    this.atirarShuriken = function(){
        if(this.estoqueShruiken > 0) {
            console.log('Atirou')
            this.estoqueShruiken -= 1
        } else {
            console.log('Acabou')
        }
    }
}

let Naruto = new Ninja('Naruto', 3)

console.log(Naruto)
Naruto.atirarShuriken()
console.log(Naruto)
Naruto.atirarShuriken()
Naruto.atirarShuriken()
Naruto.atirarShuriken()
console.log(Naruto)
