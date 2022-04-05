var peoples = {
    01: 'Matheus',
    02: 'Pedro',
    03: 'João',
    04: 'Maria',
    05: 'Robertinha'
}


Object.keys(peoples).forEach((item) => {

    console.log(`${item} - ${peoples[item]}`)
    
})

// tal do for in

for (var item in peoples) {
    console.log(item + " - " + peoples[item])
}


function Carro(marca, preco, cor, aro) {
    this.marca = marca;
    this.preco = preco;
    this.calota = true;
    this.cor = cor;
    this.aro = aro
}

let fusca = new Carro("VW", 10000, 'red', 18)

for(prop in fusca) {
    console.log(prop + ' => ' + fusca[prop])
}