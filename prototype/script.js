function Bands(band1, band2, band3, band4){
    this.band1 = band1
    this.band2 = band2
    this.band3 = band3
    this.band4 = band4
}

let myFavBands = new Bands(
    'Imagine dragons',
    'Twenty one Pilots',
    'The Smiths',
    'Tears for fears',
    'Queen'
)

console.log(myFavBands)

//Identify prototype
Bands.prototype ? console.log(true) : console.log(false) // true
myFavBands.prototype ? console.log(true) : console.log(false) // false

//How add methodos and proprieties using prototype.
Bands.prototype.andar = (() => console.log('Andou'))

Bands.prototype.cantar = (() => console.log('Cantou'))

myFavBands.andar() //Andou
myFavBands.cantar() // Cantou


//Add múltiplas props e metodos
function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
}

Carro.prototype = {
    rodas: 4,
    ligar(){
        console.log('ligou')
    }
}

let bmw = new Carro('BMW', 10000)


bmw.ligar() //Ligou
console.log(bmw.rodas) // 4



//Modificação da instância através do prototype

let ferrari = new Carro('Ferrari', 20000)

Carro.prototype.tetoSolar = true;
Carro.prototype.abrirTetoSolar = function(){
    console.log('O teto abriu')
}
console.log(bmw.tetoSolar)
ferrari.abrirTetoSolar()


//Prototype === Objeto

function Fruits(name, color) {
    this.name = name
    this.color = color
}

Fruits.prototype.good = true;

let apple = new Fruits('Maçã', 'Vermelho')

console.log(apple.good) //true

apple.good = false;

console.log(apple.good) //false

//Verificar se há uma determinada propriedade dentro de um prototype

apple.hasOwnProperty('name') ? console.log(true) : console.log (false)