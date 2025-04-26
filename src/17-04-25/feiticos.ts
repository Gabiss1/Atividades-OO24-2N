import { CriaturaMagica } from "./criaturasMagicas";
import { Efeito } from "./efeitos";
import { Feitico } from "./feiticoInterface";
import { Objeto } from "./objetos";
import { Fenix } from "./subCriaturas";

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
    poderBase: number | Efeito
    descricao: string
    
    constructor(nomeFeitico: string, poderFeitico: number | Efeito, descricaoFeitico: string) {
        this.nome = nomeFeitico
        this.poderBase = poderFeitico
        this.descricao = descricaoFeitico
    }
    
    getNome(): string {
        return this.nome
    }
    
    getPoder(): number | Efeito {
        return this.poderBase
    }
    
    getDescricao(): string {
        return this.descricao
    }

    lancarFeitico(alvo: CriaturaMagica): void {
        this.ativarEfeito(this.poderBase, alvo)
    }

    ativarEfeito(poder: number | Efeito, alvo: CriaturaMagica): void {
        if (typeof poder === 'number') {
            alvo.receberProtecao(poder)
        } else {
            alvo.receberEfeito(poder)
        }
    }
}

export class FeiticoCura implements Feitico{
    nome: string
    poderBase: number
    descricao: string

    constructor(nome: string, poder: number, descricao: string){
        this.nome = nome
        this.poderBase = poder
        this.descricao = descricao
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

    lancarFeitico(alvo: Fenix): void {
        this.ativarEfeito(this.poderBase, alvo)
    }

    ativarEfeito(poder: number, alvo: Fenix): void {
        alvo.renascer(poder)
    }
}