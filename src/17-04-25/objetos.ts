import { Efeito } from "./efeitos"

export interface Objeto {
    nome: string
    descricao: string

    receberEfeito(efeito: Efeito):void
}

export class ObjetoMundano implements Objeto{
    nome: string
    descricao: string

    constructor(nome: string, descricao: string){
        this.nome = nome
        this.descricao = descricao
    }

    receberEfeito(efeito: Efeito): void {
        
    }
}

export class ObjetoMagico implements Objeto{
    nome: string
    descricao: string

    constructor(nome: string, descricao: string){
        this.nome = nome
        this.descricao = descricao
    }

    receberEfeito(efeito: Efeito): void {
        
    }
}