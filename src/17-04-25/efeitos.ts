export class Efeito {
    nome: string
    tipoEfeito: string

    constructor(nome: string, tipo: string){
        this.nome = nome
        this.tipoEfeito = tipo
    }

    getNome(): string{
        return nome
    }

    getTipoEfeito(): string{
        return this.tipoEfeito
    }
}