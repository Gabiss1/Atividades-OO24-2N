import { Feitico } from "./feiticoInterface"

export abstract class CriaturaMagica {
    protected nome: string
    protected vida: number
    protected tipo: string
    protected poder: number

    constructor(nomeCriatura: string, vidaCriatura: number, tipoCriatura: string, poderCriatura: number) {
        this.nome = nomeCriatura
        this.vida = vidaCriatura
        this.tipo = tipoCriatura
        this.poder = poderCriatura
    }

    abstract usarMagia(feitico: Feitico): void

    receberDano(dano: number): void{}

    receberProtecao(defesa: number): void{}
}