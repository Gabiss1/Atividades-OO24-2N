import { Cacador } from "./cacador"
import { Monstro } from "./monstro"

export interface Habilidade {
    nome: string
    descricao: string
    classe: string
    valorEfeito: number

    usarHabilidade(nomeUsuario:string, alvo: Monstro | Cacador):void
    calcularEfeito(alvo: Monstro | Cacador):void
    exibirDescricao():void
}