export interface Relacionavel{
    descreverRelacao(): string
}

export class Pessoa implements Relacionavel{
    protected nome: string
    protected sobrenome: string
    protected dataNascimento: string
    protected genero: "Masculino" | "Feminino"
    protected outrasRelacoes: Relacionavel[] = []

    constructor(nome: string, sobrenome: string, dataNasc: string, genero: "Masculino" | "Feminino"){
        this.nome = nome
        this.sobrenome = sobrenome
        this.dataNascimento = dataNasc
        this.genero = genero
    }

    addChildren(filho: Pessoa): void{
        this.outrasRelacoes.push(filho)
    }

    descreverRelacao(): string {
        return ""
    }
}


