import { CriaturaMagica } from "./criaturasMagicas";
import { Feitico } from "./feiticoInterface";
import { Efeito } from "./efeitos";

export abstract class Guardiao extends CriaturaMagica {
    private habilidade: Feitico

    constructor(nomeGuardiao: string, vidaGuardiao: number, tipoGuardiao: string, poderGuardiao: number, defesaGuardiao: number, magiaGuardiao: Feitico) {
        super(nomeGuardiao, vidaGuardiao, tipoGuardiao, poderGuardiao, defesaGuardiao)
        this.habilidade = magiaGuardiao
    }

    usarMagia(feitico: Feitico, alvo: CriaturaMagica): void {}

    protegerSegredo(): void {}

    receberDano(dano: number): void{}

    receberProtecao(defesa: number): void {}

    receberEfeito(efeito: Efeito): void {}

    perderMovimento(): void{}
}

export class Cerberus extends Guardiao {

    constructor(nomeCerberus: string, vidaCerberus: number, tipoCerberus: string, poderCerberus: number, defesaCerberus: number, magiaCerberus: Feitico) {
        super(nomeCerberus, vidaCerberus, tipoCerberus, poderCerberus, defesaCerberus, magiaCerberus)
    }

    usarMagia(magia: Feitico, alvo: CriaturaMagica): void{
        magia.lancarFeitico(alvo)
    }

    protegerSegredo(): void {
        console.log(`${this.nome} está protegendo a Pedra Filosofal!!`)
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

    receberEfeito(efeito: Efeito): void {
        if (efeito.getTipoEfeito() === 'Paralisar') {
            this.perderMovimento()
        } else {
            console.log('Esse efeito não consegue te atingir!')
        }
    }

    perderMovimento(): void{
        console.log(`${this.nome} não pode agir!`)
    }
}

export class Basilisco extends Guardiao {

    constructor(nomeBasilisco: string, vidaBasilisco: number, tipoBasilisco: string, poderBasilisco: number, defesaBasilisco: number, magiaBasilisco: Feitico) {
        super(nomeBasilisco, vidaBasilisco, tipoBasilisco, poderBasilisco, defesaBasilisco, magiaBasilisco)
    }

    usarMagia(magia: Feitico, alvo: CriaturaMagica): void{
        magia.lancarFeitico(alvo)
    }

    protegerSegredo(): void {
        console.log(`${this.nome} está protegendo a Câmara Secreta!!`)
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

    receberEfeito(efeito: Efeito): void {
        if (efeito.getTipoEfeito() === 'Paralisar') {
            this.perderMovimento()
        } else {
            console.log('Esse efeito não consegue te atingir!')
        }
    }

    perderMovimento(): void{
        console.log(`${this.nome} não pode agir!`)
    }
}

export class FantasmaDaCorvinal extends Guardiao {

    constructor(nomeFantasma: string, vidaFantasma: number, tipoFantasma: string, poderFantasma: number, defesaFantasma: number, magiaFantasma: Feitico) {
        super(nomeFantasma, vidaFantasma, tipoFantasma, poderFantasma, defesaFantasma, magiaFantasma)
    }

    usarMagia(magia: Feitico, alvo: CriaturaMagica): void{
        magia.lancarFeitico(alvo)
    }

    protegerSegredo(): void {
        console.log(`${this.nome} está protegendo a Torre da Corvinal!!`)
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

    rreceberEfeito(efeito: Efeito): void {
        if (efeito.getTipoEfeito() === 'Paralisar') {
            this.perderMovimento()
        } else {
            console.log('Esse efeito não consegue te atingir!')
        }
    }

    perderMovimento(): void{
        console.log(`${this.nome} não pode agir!`)
    }
}