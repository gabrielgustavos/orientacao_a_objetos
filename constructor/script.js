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