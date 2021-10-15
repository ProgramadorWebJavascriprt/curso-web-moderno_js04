console.log('curso de javascript web moderno/Estrutura de Controle:Usando a Estrutura IF/ELSE;') //terça-feira,11/05/2021;20:23:00 h +|-
const imprimirResultado = function(nota){
    if(nota  >= 7 ) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}
imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('EPA!') // JS é fracamente tipada..."CUIDADO"
