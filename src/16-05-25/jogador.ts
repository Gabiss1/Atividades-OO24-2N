import { Carta } from "./carta";

let pilha = []
let baralho = []

export abstract class Jogador{
    mao: Carta[] = []

    comprarCarta(): void{
        
    }

    jogarCarta(carta: number): void{
        pilha.push(this.mao[carta])
        this.mao.splice(carta, 1)
    }

    maoVazia(): boolean{
        return this.mao.length === 0
    }
}