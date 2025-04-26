import { Feitico } from "./feiticoInterface";

export interface Grimorio {
    magias: Feitico[] 

    consultarFeitico(feitico: string):string
}

export class Diretor implements Grimorio{
    nome: string
    magias: Feitico[]

    constructor(nome: string, magias: Feitico[]){
        this.nome = nome
        this.magias = magias
    }

    consultarFeitico(feitico: string): string {
        for (const escolha of this.magias) {
            if (escolha.getNome() === feitico) {
                return escolha.getDescricao()
            }
        }
    }
}