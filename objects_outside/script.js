let car = {
    type: 'SUV',
}

car.doors = 4;

car.type == 'SUV' ? car.tetoSolar = true : car.tetoSolar = false;

console.log(car);

car.acelear = (() => console.log('vrum vrum')
)

car.acelear()