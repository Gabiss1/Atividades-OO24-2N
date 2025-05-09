export class PersonagemTemporal {
    private nome: string
    private universo: string
    private assinaturaTemporal: number

    constructor(nome: string, universo: string, assinaturaTemporal: number) {
        this.nome = nome
        this.universo = universo
        this.assinaturaTemporal = assinaturaTemporal
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

    exibirInfo(target: PersonagemTemporal): void {
        console.log(`O personagem ${target.getNome()}, tem como seu universo ${target.getUniverso()}, e sua ID Universal é ${target.getAssinaturaTemporal()}.`)
    }

}