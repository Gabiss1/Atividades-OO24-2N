import { Feiticos } from "../Atividades/22-02-25/harryPotter";
import { CriaturaMagica } from "./criaturasMagicas";
import { Efeito } from "./efeitos";
import { Feitico } from "./feiticoInterface";
import { Objeto } from "./objetos";


export class FeiticoAtaque implements Feitico{
    nome: string
    poderBase: number
    descricao: string
    
    constructor(nomeFeitico: string, poderFeitico: number, descricaoFeitico: string) {
        this.nome = nomeFeitico
        this.poderBase = poderFeitico
        this.descricao = descricaoFeitico
    }
    
    getNome(): string {
        return this.nome
    }
    
    getPoder(): number {
        return this.poderBase
    }
    
    getDescricao(): string {
        return this.descricao
    }

    lancarFeitico(alvo: CriaturaMagica): void {
        this.ativarEfeito(this.poderBase, alvo)
    }

    ativarEfeito(poder: number, alvo: CriaturaMagica): void {
        alvo.receberDano(poder)
    }
}

export class FeiticoDefesa implements Feitico{
    nome: string
    poderBase: number
    descricao: string
    
    constructor(nomeFeitico: string, poderFeitico: number, descricaoFeitico: string) {
        this.nome = nomeFeitico
        this.poderBase = poderFeitico
        this.descricao = descricaoFeitico
    }
    
    getNome(): string {
        return this.nome
    }
    
    getPoder(): number {
        return this.poderBase
    }
    
    getDescricao(): string {
        return this.descricao
    }

    lancarFeitico(alvo: CriaturaMagica): void {
        this.ativarEfeito(this.poderBase, alvo)
    }

    ativarEfeito(poder: number, alvo: CriaturaMagica): void {
        alvo.receberProtecao(poder)
    }
}

export class FeiticoSuporte implements Feitico{
    nome: string
    poderBase: Efeito
    descricao: string
    
    constructor(nomeFeitico: string, poderFeitico: Efeito, descricaoFeitico: string) {
        this.nome = nomeFeitico
        this.poderBase = poderFeitico
        this.descricao = descricaoFeitico
    }
    
    getNome(): string {
        return this.nome
    }
    
    getPoder(): Efeito {
        return this.poderBase
    }
    
    getDescricao(): string {
        return this.descricao
    }

    lancarFeitico(alvo: CriaturaMagica | Objeto): void {
        this.ativarEfeito(this.poderBase, alvo)
    }

    ativarEfeito(poder: Efeito, alvo: CriaturaMagica | Objeto): void {
        alvo.receberEfeito(poder)
    }
}