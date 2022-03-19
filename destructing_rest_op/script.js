/* =====> Rest operator é utilizado para saber 
        quantos argumentos irão para o destructing
*/


let arr = [1, 3, 45, 6, 7, 78, 'asd', 'asd']
let arr2 = [1, 3, 45, 6, 7, 78, 'asd', 'asd', 10, 20, 30, 40, 50, 60]

let[a,b, ...c] = arr2;

console.log(a)
console.log(b)
console.log(c)
