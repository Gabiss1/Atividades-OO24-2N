const rl = require('readline-sync')

const numeroAleatorio:number = Math.floor(Math.random()*100)
let acerto:boolean = false
let tentativa:number = 0


console.log('Tenho um número secreto, tente acertá-lo!')

while (acerto === false) {
    const numeroDigitado:string = rl.question('Digite um numero de 1 a 100:')
    const numeroEscolhido:number = Number(numeroDigitado)
    if (numeroEscolhido > numeroAleatorio) {
        console.log(`Errou, ${numeroEscolhido} é maior que o número secreto`)
        tentativa++
    } else if (numeroEscolhido < numeroAleatorio) {
        console.log(`Errou, ${numeroEscolhido} é menor que o número secreto`)
        tentativa++
    } else if (numeroEscolhido === numeroAleatorio) {
        tentativa++
        console.log(`
Acertou, o número secreto era ${numeroEscolhido}.
Voce precisou de ${tentativa} tentativas para acerta-lo.
`)
        acerto = true
    }
}


