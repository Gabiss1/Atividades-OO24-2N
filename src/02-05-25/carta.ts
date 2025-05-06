export class Carta {
    protected nome: string
    protected tipoCarta: 'Pokemon' | 'Item' | 'Apoiador' | 'Energia'
    
    constructor(nome: string, tipo: 'Pokemon' | 'Item' | 'Apoiador' | 'Energia'){
        this.nome = nome
        this.tipoCarta = tipo
    }

    getNome(): string{
        return this.nome
    }

    getTipoCarta(): string{
        return this.tipoCarta
    }

    exibirCarta(): void{}
}