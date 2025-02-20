var rl = require('readline-sync');
var numeroAleatorio = Math.floor(Math.random() * 100);
var acerto = false;
var tentativa = 0;
console.log('Tenho um número secreto, tente acertá-lo!');
while (acerto === false) {
    var numeroDigitado = rl.question('Digite um numero de 1 a 100:');
    var numeroEscolhido = Number(numeroDigitado);
    if (numeroEscolhido > numeroAleatorio) {
        console.log("Errou, ".concat(numeroEscolhido, " \u00E9 maior que o n\u00FAmero secreto"));
        tentativa++;
    }
    else if (numeroEscolhido < numeroAleatorio) {
        console.log("Errou, ".concat(numeroEscolhido, " \u00E9 menor que o n\u00FAmero secreto"));
        tentativa++;
    }
    else if (numeroEscolhido === numeroAleatorio) {
        tentativa++;
        console.log("\nAcertou, o n\u00FAmero secreto era ".concat(numeroEscolhido, ".\nVoce precisou de ").concat(tentativa, " tentativas para acerta-lo.\n"));
        acerto = true;
    }
}
