import { Bruxo } from "./bruxo"
import { CriaturaMagica } from "./criaturasMagicas"
import { Efeito } from "./efeitos"
import { Guardiao } from "./guardiao"
import { Objeto } from "./objetos"

export interface Feitico {
    nome: string
    poderBase: number | Efeito
    descricao: string

    lancarFeitico(alvo: CriaturaMagica):void
    ativarEfeito(poder: number | Efeito, alvo: CriaturaMagica | Objeto):void
    getNome():string
    getPoder():number | Efeito
    getDescricao():string
}