console.log('curso de javascript web moderno/Estrutura de Controle:Usando a Estrutura IF/ELSE IF;') //terça-feira,11/05/2021;20:35:00 h +|-
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}
const imprimirResultado = function (nota){
    if(nota.entre(9, 10)){
        console.log('Quadro de Honra')
    } else if(nota.entre(7, 8.99)) {
        console.log('Aprovado')
    }else if(nota.entre(4, 6.99)) {
        console.log('Recuperação')
    }else if(nota.entre(0, 3.99)) {
        console.log('Reprovado')
    }else{
        console.log('Nota invalida')
    }
          console.log('Fim')
}
imprimirResultado(10)  // quadro de honra 
imprimirResultado(8.9)  // Aprovado
imprimirResultado(6.55) // Recuperação
imprimirResultado(2.3) // Reprovado
imprimirResultado(-1) // Nota invalida