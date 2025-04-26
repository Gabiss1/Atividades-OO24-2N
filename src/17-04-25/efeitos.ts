import { CriaturaMagica } from "./criaturasMagicas"
import { Objeto } from "./objetos"

export class Efeito {
    nome: string
    tipoEfeito: string

    constructor(nome: string, tipo: string){
        this.nome = nome
        this.tipoEfeito = tipo
    }

    getNome(): string{
        return this.nome
    }

    getTipoEfeito(): string{
        return this.tipoEfeito
    }

    aplicarEfeito(alvo: Objeto | CriaturaMagica): void{
        alvo.receberEfeito(this)
    }
}