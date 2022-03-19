function Ninja(nome, arma) {
    this.nome = nome;
    this.arma = arma;
}

const naruto = new Ninja('Sasuke', 'shuriken');
const cloneDoNaruto = new Ninja('Naruto', 'shuriken')
const cloneVerdadeiroDoNaruto = naruto;

const rocklee = new Ninja('Gara lee', 'kunai')
const cloneDoRockLee = new Ninja('Rock lee', 'faca')
const cloneVerdadeiroDoRockLee = rocklee;



console.log(naruto === rocklee) // false
console.log(naruto === cloneDoNaruto) // false
console.log(naruto === cloneVerdadeiroDoNaruto) // true
console.log(rocklee === cloneDoRockLee) // false
console.log(rocklee === cloneVerdadeiroDoRockLee) // true
console.log(cloneDoNaruto)
console.log(cloneDoRockLee)
console.log(rocklee)
console.log(naruto)