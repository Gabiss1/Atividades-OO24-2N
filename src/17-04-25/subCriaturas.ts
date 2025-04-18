import { CriaturaMagica } from "./criaturasMagicas";
import { Feitico } from "./feiticoInterface";

export class Dragao extends CriaturaMagica {

    constructor(nomeDragao: string, vidaDragao: number, tipoDragao: string, poderDragao: number) {
        super(nomeDragao, vidaDragao, tipoDragao, poderDragao)
    }

    usarMagia(feitico: Feitico): void {
        console.log(`${this.nome} está a expelir fogo.`)
    }
}

export class Fenix extends CriaturaMagica {

    constructor(nomeFenix: string, vidaFenix: number, tipoFenix: string, poderFenix: number) {
        super(nomeFenix, vidaFenix, tipoFenix, poderFenix)
    }

    usarMagia(feitico: Feitico): void {
        console.log(`${this.nome} está a se regenerar/reviver.`)
    }
}

export class Unicornio extends CriaturaMagica {

    constructor(nomeUnicornio: string, vidaUnicornio: number, tipoUnicornio: string, poderUnicornio: number) {
        super(nomeUnicornio, vidaUnicornio, tipoUnicornio, poderUnicornio)
    }

    usarMagia(feitico: Feitico): void {
        console.log(`${this.nome} explodiu e virou suprimentos.`)
    }
}