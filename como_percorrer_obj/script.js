var peoples = {
    01: 'Matheus',
    02: 'Pedro',
    03: 'João',
    04: 'Maria',
    05: 'Robertinha'
}

// tal do forEach

Object.keys(peoples).forEach((item) => {

    console.log(`${item} - ${peoples[item]}`)
    
})

// tal do for in

for (var item in peoples) {
    console.log(item + " - " + peoples[item])
}
