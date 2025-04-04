import { Animal } from "./animal";

class Gato extends Animal{
    constructor(nome:string){
        super(nome)
    }

    emitirSom(): void {
        console.log(`${this.nome} faz: Miau Miau!`)
    }
}

const gato1 = new Gato('Mozza')
gato1.emitirSom()