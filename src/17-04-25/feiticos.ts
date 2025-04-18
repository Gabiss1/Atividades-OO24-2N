/*constructor(nomeFeitico: string, poderFeitico: number, descricaoFeitico: string) {
    this.nome = nomeFeitico
    this.poderBase = poderFeitico
    this.descricao = descricaoFeitico
}

getNome(): string {
    return this.nome
}

getPoderBase(): number {
    return this.poderBase
}

getDescricao(): string {
    return this.descricao
} */

import { Bruxo } from "./bruxo";
import { CriaturaMagica } from "./criaturasMagicas";
import { Feitico } from "./feiticoInterface";
import { Guardiao } from "./guardiao";


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
    
    getPoderBase(): number {
        return this.poderBase
    }
    
    getDescricao(): string {
        return this.descricao
    }

    lancarFeitico(alvo: CriaturaMagica | Guardiao): void {
        this.ativarEfeito(this.poderBase, alvo)
    }

    ativarEfeito(poder: number, alvo: CriaturaMagica | Guardiao): void {
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
    
    getPoderBase(): number {
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