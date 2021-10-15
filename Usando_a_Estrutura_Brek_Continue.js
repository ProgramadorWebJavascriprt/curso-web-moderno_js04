console.log('curso de javascript web moderno/Estrutura de Controle:Usando a Estrutura  Break/Contiue;') //quinta-feira,13/05/2021;14:13:29 h +|-
console.log('Break é:')
const nuns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (x in nuns) { 
    if (x === 5){
        break
    }
    console.log(`${x} = ${nuns[x]}`)
}
console.log('Continue é:')
for(y in nuns){
    if(x === 5) {
        continue
    }
    console.log(`${y} = ${nuns[y]}`)
}
/* externo :
 for(a in  nums) {
     for(b in nums)
     if(a == 2 && b == 3) break externo
    }
 
for(a in  nums) {
           ^

ReferenceError: nums is not defined
    at Object.<anonymous> (/home/frontenddeveloper/curso_de_javascript_web_moderno/exercicios-js/04-Estrutura de Controle/Usando_a_Estrutura_Brek_Continue.js:18:12)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)*/