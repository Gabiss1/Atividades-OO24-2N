import { Animal } from "./animal";

class Cachorro extends Animal{

    constructor(nome:string){
        super(nome)
    }

    emitirSom(): void {
        console.log(`${this.nome} faz: Au Au!`)
    }
}

const cao1 = new Cachorro('Bidu')
cao1.emitirSom()