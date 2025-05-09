import { Carta } from "./Carta.js";

export class Baralho {
  private pilha: Carta[] = [];

  embaralhar(cartas: Carta[]): void {
    for (let i = cartas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
    }
    this.pilha = cartas;
  }

  comprarCarta(): Carta{
    return this.pilha.pop();
  }

  visualizarTopo(): Carta {
    return this.pilha[this.pilha.length - 1];
  }
}