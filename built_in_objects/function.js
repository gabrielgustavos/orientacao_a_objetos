// O objeto para criar funções
// Podemos criar novas funções a partir de new
// OBS: não é utilizado, serve apenas para conhecimento e para entendimento do funcionamento do JS

function teste(a) {
    return a;
}

console.log(teste('opa'))

teste2 = new Function(
    'a',
    'return arguments'
)

console.log(teste2('testando')[0])

