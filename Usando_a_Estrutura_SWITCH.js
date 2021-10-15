console.log('curso de javascript web moderno/Estrutura de Controle:Usando a Estrutura SWITCH;') //quarta-feira,12/05/2021;22:16:00 h +|-
const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
            case 9:
            console.log('Quadro de horna')
              break
               case 8: case 7:
                   console.log('Aprovado')
                   break
                     case 6: case 5: case 4:
                         console.log('Recuperação')
                         break
                           case 3: case 2: case 1: case 0:
                               console.log('Reprovado')
                               break
                               default:
                                   console.log('Nota Invalida')
    }
}
imprimirResultado(10) // Quadro de Horna
imprimirResultado(8.9) // Aprovado
imprimirResultado(6.55) // Recuperação
imprimirResultado(2.3)  // Reprovado
imprimirResultado(-1) // Nota Invalida
