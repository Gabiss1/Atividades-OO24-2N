import { Efeito } from "./efeitos"
import { Feitico } from "./feiticoInterface"

export abstract class CriaturaMagica {
    protected nome: string
    protected vida: number
    protected tipo: string
    protected poder: number
    protected defesa: number

    constructor(nomeCriatura: string, vidaCriatura: number, tipoCriatura: string, poderCriatura: number, defesaCriatura: number) {
        this.nome = nomeCriatura
        this.vida = vidaCriatura
        this.tipo = tipoCriatura
        this.poder = poderCriatura
        this.defesa = defesaCriatura
    }

    abstract usarMagia(feitico: Feitico, alvo: CriaturaMagica): void

    receberDano(dano: number): void{}

    receberProtecao(defesa: number): void{}

    receberEfeito(efeito: Efeito): void{}

    perderMovimento(): void{}
}