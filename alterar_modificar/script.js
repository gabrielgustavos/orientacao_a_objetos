let obj = {
    number: 1
}

console.log(obj.number)

let copia = obj;

console.log(copia.number)

copia.number = 5

console.log(obj.number)
console.log(copia.number)

obj.number = 2;
console.log(copia)