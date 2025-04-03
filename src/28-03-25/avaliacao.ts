import { Aluno } from "./aluno";

export class Avaliacao{
    private aluno: Aluno
    private data: string
    private peso: number
    private altura: number
    private imc: number
    private observacoes: string

    constructor(aluno:Aluno, data:string, observacoes:string){
        this.aluno = aluno
        this.data = data
        this.observacoes = observacoes
        this.peso = aluno.getPeso()
        this.altura = aluno.getAltura()
        this.imc = aluno.calcularIMC()
    }

    getData():string{
        return this.data
    }

    getAltura():number{
        return this.altura
    }

    getPeso():number{
        return this.peso
    }

    getObservacoes():string{
        return this.observacoes
    }

    getIMC():number{
        return this.imc
    }

    gerarRelatorio():void{
        console.log(`Relatório Geral: ${this.aluno.getAluno()}IMC: ${this.imc}.\nData: ${this.data}. \nObservações : ${this.observacoes}.`)
    }
}

