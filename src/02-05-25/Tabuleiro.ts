import { Baralho } from "./Baralho.js";
import { Carta } from "./Carta.js";

export class Jogador {
  private mao: Carta[] = [];
  private descarte: Carta[] = [];
  private baralho: Baralho

  constructor(baralho: Baralho){
    this.baralho = baralho
  }

  adicionarCartaMao(carta: Carta): void {
    this.mao.push(carta);
  }

  descartarCarta(): void {
    if (this.mao.length > 0) {
      const descartada = this.mao.pop()
      this.descarte.push(descartada)
    }
  }

  exibirMao(): void {
    console.log("Mão:");
    this.mao.forEach(c => c.exibirCarta())
  }

  exibirDescarte(): void {
    console.log("Descarte:");
    this.descarte.forEach(c => c.exibirCarta())
  }
}