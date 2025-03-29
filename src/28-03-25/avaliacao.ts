import { Aluno } from "./Aluno";

export class Avaliacao{
    private aluno: Aluno
    private data: number
    private peso: number
    private altura: number
    private imc: number
    private observacoes: string

    constructor(aluno:Aluno, data:number, observacoes:string){
        this.aluno = aluno
        this.data = data
        this.observacoes = observacoes
        this.peso = aluno.getPeso()
        this.altura = aluno.getAltura()
        this.imc = aluno.calcularIMC()
    }

    gerarRelatorio():string{
        return `Relatório do Aluno ${this.aluno.getNome()}: ${this.observacoes}`
    }
}