import { CriaturaMagica } from "./criaturasMagicas";
import { Feitico } from "./feiticoInterface";

export class Dragao extends CriaturaMagica {

    constructor(nomeDragao: string, vidaDragao: number, tipoDragao: string, poderDragao: number, defesaDragao: number) {
        super(nomeDragao, vidaDragao, tipoDragao, poderDragao, defesaDragao)
    }

    usarMagia(magia: Feitico, alvo: CriaturaMagica): void{
        magia.lancarFeitico(alvo)
    }

    receberDano(dano: number): void{
        dano -= this.defesa
        this.vida -= dano
        console.log(`${this.nome} sofreu ${dano} de dano!`)
        console.log(`${this.nome} está com ${this.vida} de vida!`)
    }

    receberProtecao(defesaExtra: number): void {
        this.defesa += defesaExtra
    }
}

export class Fenix extends CriaturaMagica {

    constructor(nomeFenix: string, vidaFenix: number, tipoFenix: string, poderFenix: number, defesaFenix: number) {
        super(nomeFenix, vidaFenix, tipoFenix, poderFenix, defesaFenix)
    }

    usarMagia(magia: Feitico, alvo: CriaturaMagica): void{
        magia.lancarFeitico(alvo)
    }

    receberDano(dano: number): void{
        dano -= this.defesa
        this.vida -= dano
        console.log(`${this.nome} sofreu ${dano} de dano!`)
        console.log(`${this.nome} está com ${this.vida} de vida!`)
    }

    receberProtecao(defesaExtra: number): void {
        this.defesa += defesaExtra
    }
}

export class Unicornio extends CriaturaMagica {

    constructor(nomeUnicornio: string, vidaUnicornio: number, tipoUnicornio: string, poderUnicornio: number, defesaUnicornio: number) {
        super(nomeUnicornio, vidaUnicornio, tipoUnicornio, poderUnicornio, defesaUnicornio)
    }

    usarMagia(magia: Feitico, alvo: CriaturaMagica): void{
        magia.lancarFeitico(alvo)
    }

    receberDano(dano: number): void{
        dano -= this.defesa
        this.vida -= dano
        console.log(`${this.nome} sofreu ${dano} de dano!`)
        console.log(`${this.nome} está com ${this.vida} de vida!`)
    }

    receberProtecao(defesaExtra: number): void {
        this.defesa += defesaExtra
    }
}