import { Bruxo } from "./bruxo"
import { CriaturaMagica } from "./criaturasMagicas"

export class Casa {
    nome: string
    alunosMembros: Bruxo[] = []
    criaturaMagica: CriaturaMagica

    constructor(nome: string, criaturaMagica: CriaturaMagica){
        this.nome = nome
        this.criaturaMagica = criaturaMagica
    }

    getNome():string{
        return this.nome
    }

    setAluno(aluno: Bruxo):void{
        this.alunosMembros.push(aluno)
    }
}