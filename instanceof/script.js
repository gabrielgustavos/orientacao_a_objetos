// Metodo para saber quem é o pai
// Mais prático que o constructor

let criarArvore = ((especie, temFruto) => {
    return {
        especie,
        temFruto: temFruto
    }
} )

let laranjeira = criarArvore('Laranjeira', true)

console.log(laranjeira)
console.log(laranjeira.constructor)

let jaspion = new Heroi('Jaspion', 'robô')
console.log(jaspion)
console.log(jaspion.constructor)

let obj = {
    teste: 'teste'
}

console.log(laranjeira instanceof criarArvore) // False
console.log(laranjeira instanceof Object) // True
console.log(jaspion instanceof Heroi) // True
console.log(obj instanceof Object) // True