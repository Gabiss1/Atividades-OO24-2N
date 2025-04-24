import { Bruxo } from "./bruxo"
import { CriaturaMagica } from "./criaturasMagicas"
import { Guardiao } from "./guardiao"

export interface Feitico {
    nome: string
    poderBase: number
    descricao: string

    lancarFeitico(alvo: CriaturaMagica):void
    ativarEfeito(poder: number, alvo: CriaturaMagica):void
    getNome():string
    getPoder():number
    getDescricao():string
}