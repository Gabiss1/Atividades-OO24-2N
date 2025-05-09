import { Jogador } from "./jogador"
import { Pilha } from "./pilha"

export class Carta {
    nome: string
    tipo: 'Pokemon' | 'Item' | 'Apoiador' | 'Energia'
  
    constructor(nome: string, tipo: 'Pokemon' | 'Item' | 'Apoiador' | 'Energia') {
      this.nome = nome
      this.tipo = tipo
    }
  
    getNome(): string {
      return this.nome
    }
  
    getTipoCarta(): string {
      return this.tipo
    }
  
    exibirCarta(): void{}

    descartar(descarte: Pilha<Carta>): void{}

    usarCarta(jogador: Jogador): void{}
  }
  
  