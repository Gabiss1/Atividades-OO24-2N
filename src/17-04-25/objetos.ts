import { Bruxo } from "./bruxo"
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
        if (efeito.getTipoEfeito() === 'Abrir') {
            console.log(`${this.nome} foi aberto(a)!`)
        } else {
            console.log('Esse efeito não funcionou!')
        }
    }
}

export class ObjetoMagico implements Objeto{
    nome: string
    descricao: string
    bonus: string
    valorBonus: number

    constructor(nome: string, descricao: string, bonus: string, valorBonus: number){
        this.nome = nome
        this.descricao = descricao
        this.bonus = bonus
        this.valorBonus = valorBonus
    }

    receberEfeito(efeito: Efeito): void {
        if (efeito.getTipoEfeito() === 'Achar') {
            console.log(`${this.nome} foi encontrado(a)!`)
        } else {
            console.log('Esse efeito não funcionou!')
        }
    }

    fornecerBonus(bruxo: Bruxo): void{
        bruxo.receberBonus(this.valorBonus, this.bonus)
    }
}