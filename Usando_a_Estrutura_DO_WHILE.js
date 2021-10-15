console.log('curso de javascript web moderno/Estrutura de Controle:Usando a Estrutura  DO/While;') //quarta-feira,12/05/2021;22:42:00 h +|-
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = -1
do{
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`opção escolhida foi ${opcao}.`)
    
}while (opcao!= -1)
console.log('Até a próxima!!!')
