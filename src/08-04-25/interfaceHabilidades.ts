import { Cacador } from "./cacador"
import { Monstro } from "./monstro"

export interface Habilidade {
    nome: string
    descricao: string
    classe: number
    valorEfeito: number

    usarHabilidade(nomeUsuario:string, alvo: Monstro):void
    calcularEfeito(alvo: Monstro | Cacador):void
    exibirDescricao():void
}