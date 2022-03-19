let maquina = {
    material: 'Inox',
    equipamentos: ['motor', 'freio', 'esteira'],
    vaiMontada: false,
    numeroMotores: 1
};

console.log(maquina)
console.log(maquina.material)
console.log(maquina.equipamentos[2])
console.log(maquina.equipamentos)

for(let i = 0; i < maquina.equipamentos.length; i++) {
    console.log(maquina.equipamentos[i]);
}

maquina.vaiMontada == false ? console.log('Necessário montar') : console.log('está montada')

