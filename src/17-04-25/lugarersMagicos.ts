import { Efeito } from "./efeitos"
import { Objeto } from "./objetos"
import { procurarItem } from "./main"

export class LugarMagico {
    protected nome: string
    protected andares: number
    protected desafios: string
    protected itensSecretos: Objeto[] = []

    constructor(nomeLugar: string, andarLugar: number, desafioLugar: string, itens: Objeto[]) {
        this.nome = nomeLugar
        this.andares = andarLugar
        this.desafios = desafioLugar
        this.itensSecretos = itens
    }

    getNome(): string {
        return this.nome
    }

    getAndares(): number {
        return this.andares
    }

    getDesafios(): string {
        return this.desafios
    }

    iniciarDesafio(): void{
        
    }

}

