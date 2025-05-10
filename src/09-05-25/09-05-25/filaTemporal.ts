import { PersonagemTemporal } from "./heroisTemporais"

export class FilaTemporal{
    private filaDeHerois: PersonagemTemporal[] = []

    enfileirarHerois(heroi: PersonagemTemporal): void{
        this.filaDeHerois.push(heroi)
    }

    desenfileirarHerois(): PersonagemTemporal | undefined{
        if (this.estaVazia()) {
            console.log('A Fila está vazia.')
            return undefined
        }
        return this.filaDeHerois.shift()
    }

    primeiroHeroiDaFila(): PersonagemTemporal{
        if (this.estaVazia()) {
            console.log('A Fila está vazia.')
            return undefined
        }
        return this.filaDeHerois[0]
    }

    estaVazia(): boolean{
        return this.filaDeHerois.length === 0
    }

    tamanhoDaFila(): number{
        return this.filaDeHerois.length
    }
}