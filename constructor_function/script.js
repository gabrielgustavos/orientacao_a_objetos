function ninja(name, gun){
    this.name = name,
    this.gun = gun,
    this.atirarArma = function() {
        console.log(`You shoot with a ${this.gun}`)
    }
}

let ninja1 = new ninja('Naruto', 'shuriken')
console.log(ninja1.name)
ninja1.atirarArma()

let ninja2 = new ninja('Sasuke', 'kunai')
console.log(ninja2.name)
ninja2.atirarArma()

