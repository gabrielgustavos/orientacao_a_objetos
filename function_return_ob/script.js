function createCar(model, doors, aro, tetoSolar) {
    return {
        modelOfCar: model,
        doors: doors,
        aro: aro,
        tetoSolar: tetoSolar,
        ligarCarro: (() => console.log('ligou')
        ),
        temTetoSolar: function() {
            this.tetoSolar == true ? console.log('Tem teto solar')
            : console.log('Não tem teto solar')
        }
    }
}

let ferrari = createCar('Ferrari', 4, 18, true)
console.log(ferrari.modelOfCar)

ferrari.ligarCarro()
ferrari.temTetoSolar()