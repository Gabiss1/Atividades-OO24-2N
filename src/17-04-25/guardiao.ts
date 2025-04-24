import { CriaturaMagica } from "./criaturasMagicas";

export abstract class Guardiao extends CriaturaMagica {

    constructor(nomeGuardiao: string, vidaGuardiao: number, tipoGuardiao: string, poderGuardiao: number) {
        super(nomeGuardiao, vidaGuardiao, tipoGuardiao, poderGuardiao)
    }

    usarMagia(): void {}

    protegerSegredo(): void {}

    receberDano(dano: number): void{}
}

export class Cerberus extends Guardiao {

    constructor(nomeCerberus: string, vidaCerberus: number, tipoCerberus: string, poderCerberus: number) {
        super(nomeCerberus, vidaCerberus, tipoCerberus, poderCerberus)
    }

    usarMagia(): void {
        
    }

    protegerSegredo(): void {}

    receberDano(dano: number): void{}
}

export class Basilisco extends Guardiao {

    constructor(nomeBasilisco: string, vidaBasilisco: number, tipoBasilisco: string, poderBasilisco: number) {
        super(nomeBasilisco, vidaBasilisco, tipoBasilisco, poderBasilisco)
    }

    usarMagia(): void {
        
    }

    protegerSegredo(): void {
        
    }

    receberDano(dano: number): void{}
}
