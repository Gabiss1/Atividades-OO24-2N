import { Carta } from "./carta";
import { Jogador } from "./jogador";
import { Pilha } from "./pilha";
import { CartaPokemon } from "./pokemon";

export class CartaItem extends Carta {
    nome: string
    tipo: 'Item' 
    private efeito: 'Compra' | 'Dano' | 'Cura'

    constructor(nome: string, tipo: 'Item', efeito: 'Compra' | 'Dano' | 'Cura') {
      super(nome, tipo)
      this.efeito = efeito
    }

    usarCarta(jogador: Jogador): void{
        if (this.efeito === 'Compra') {
          this.efeitoCompra(jogador)
        } else if (this.efeito === 'Dano') {
          this.efeitoDano(jogador)
        } else {
          this.efeitoCura(jogador)
        }
    }

    efeitoCompra(jogador: Jogador): void{
      jogador.adicionarCartaMao()
    }

    efeitoCura(jogador: Jogador): void{
      if (jogador.getPokemons()[0] instanceof CartaPokemon) {
        jogador.getPokemons()[0].receberCura(20)
      }
      
    }

    efeitoDano(jogador: Jogador): void{
      if (jogador.getPokemons()[0] instanceof CartaPokemon) {
        jogador.getPokemons()[0].receberCura(30)
      }
    }

    descartar(descarte: Pilha<Carta>): void {
    }
  
  }