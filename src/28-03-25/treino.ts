import { Aluno } from "./Aluno";
import { Exercicio } from "./exercicio";
import { Instrutor } from "./instrutor";

export class Treino {
    private aluno: Aluno
    private instrutor: Instrutor
    private exercicio: Exercicio

    constructor(aluno: Aluno, instrutor: Instrutor, exercicio: Exercicio){
        this.aluno = aluno
        this.instrutor = instrutor
        this.exercicio = exercicio
    }
}