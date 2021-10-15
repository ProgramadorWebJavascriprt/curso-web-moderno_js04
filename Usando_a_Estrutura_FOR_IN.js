console.log('curso de javascript web moderno/Estrutura de Controle:Usando a Estrutura  FOR/IN;') //quinta-feira,13/05/2021;13:59:59 h +|-
console.log('Numeros de um arry:')
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (i in notas) {
    console.log(i, notas[i])
}
console.log('Atributo de uma pessoa: ')
const pessoa = {
    nome:'Ana',
    sobrenome:'Silva',
    idade: 29,
    peso: 64
}
for(atributo in pessoa) {
  console.log(`${atributo}=${pessoa[atributo]}`)
}

