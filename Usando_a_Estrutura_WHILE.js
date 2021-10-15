console.log('curso de javascript web moderno/Estrutura de Controle:Usando a Estrutura While;') //quarta-feira,12/05/2021;22:42:00 h +|-
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0
while (opcao!= -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`opção escolhida foi ${opcao}.`)
    
}
console.log('Até a próxima!!!')
