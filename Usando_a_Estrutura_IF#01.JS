console.log('curso de javascript web moderno/Estrutura de Controle:Usando a Estrutura IF#01;') //terça-feira,11/05/2021;19:36:00 h +|-
function soboanoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}
soboanoticia(8.1)
soboanoticia(6.1)

function seForVerdadeEuFalo(valor){
    if(valor) {
        console.log('É verdade...'  + valor)
    }
}
seForVerdadeEuFalo() //false
seForVerdadeEuFalo(null) //false
seForVerdadeEuFalo(undefined)// false
seForVerdadeEuFalo(NaN)// false
seForVerdadeEuFalo('')// false
seForVerdadeEuFalo(0) // false 
seForVerdadeEuFalo(-1)// false
seForVerdadeEuFalo(' ')// true
seForVerdadeEuFalo('?')// true
seForVerdadeEuFalo([]) // true
seForVerdadeEuFalo([1, 2]) // true
seForVerdadeEuFalo({})// true