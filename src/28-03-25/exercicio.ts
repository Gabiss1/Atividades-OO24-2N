export class Exercicio {
    private nome: string
    private serie: number
    private repeticoes: number

    constructor(nome:string, serie:number, repeticoes:number){
        this.nome = nome
        this.serie = serie
        this.repeticoes = repeticoes
    }

    getNome():string{
        return this.nome
    }

    getSerie():number{
        return this.serie
    }

    getRepeticoes():number{
        return this.repeticoes
    }

    getExercicio():string{
        return `\nNome: ${this.nome}.\nSerie: ${this.serie}.\nRepetições: ${this.repeticoes}.`
    }
}