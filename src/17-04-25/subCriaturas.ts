import { CriaturaMagica } from "./criaturasMagicas";
import { Feitico } from "./feiticoInterface";
import { Efeito } from "./efeitos";

export class Dragao extends CriaturaMagica {
    private habilidade: Feitico

    constructor(nomeDragao: string, vidaDragao: number, tipoDragao: string, poderDragao: number, defesaDragao: number, magia: Feitico) {
        super(nomeDragao, vidaDragao, tipoDragao, poderDragao, defesaDragao)
        this.habilidade = magia
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

export class Fenix extends CriaturaMagica {
    private habilidade: Feitico

    constructor(nomeFenix: string, vidaFenix: number, tipoFenix: string, poderFenix: number, defesaFenix: number, magia: Feitico) {
        super(nomeFenix, vidaFenix, tipoFenix, poderFenix, defesaFenix)
        this.habilidade = magia
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

    renascer(poder: number): void{
        if (this.vida <= 0) {
            this.vida += poder
            console.log(`${this.nome} renasceu das Cinzas!!!`)
        } else {
            console.log(`${this.nome} não pode usar esse poder ainda!!`)
        }
    }
}

export class Unicornio extends CriaturaMagica {
    private habilidade: Feitico

    constructor(nomeUnicornio: string, vidaUnicornio: number, tipoUnicornio: string, poderUnicornio: number, defesaUnicornio: number, magia: Feitico) {
        super(nomeUnicornio, vidaUnicornio, tipoUnicornio, poderUnicornio, defesaUnicornio)
        this.habilidade = magia
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