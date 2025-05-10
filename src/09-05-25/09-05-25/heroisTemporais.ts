import { FilaTemporal } from "./filaTemporal"

export class PersonagemTemporal {
    private nome: string
    private universo: string
    private assinaturaTemporal: number

    constructor(nome: string, universo: string, fila: FilaTemporal) {
        this.nome = nome
        this.universo = universo
        this.assinaturaTemporal = this.posicaoFila(fila)
    }

    getNome(): string {
        return this.nome
    }

    getUniverso(): string {
        return this.universo
    }

    getAssinaturaTemporal(): number {
        return this.assinaturaTemporal
    }

    posicaoFila(filaTemporal: FilaTemporal): number{
        return filaTemporal.tamanhoDaFila()+1
    }

    exibirInfo(target: PersonagemTemporal): void {
        console.log(`O personagem ${target.getNome()}, tem como seu universo ${target.getUniverso()}, e sua ID Universal é ${target.getAssinaturaTemporal()}.`)
    }

}