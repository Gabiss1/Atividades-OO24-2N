import { Carta } from "./carta";
import { Pilha } from "./pilha";
import { CartaPokemon } from "./pokemon";

export class Jogador {
  private mao: Pilha<Carta>
  private descarte: Pilha<Carta>
  private baralho: Pilha<Carta>
  private pokemons: CartaPokemon[] = []

  constructor(baralho: Pilha<Carta>){
    this.baralho = baralho
  }

  getPokemons(): CartaPokemon[] {
    return this.pokemons
  }

  baixarPokemon(): void{
    let baixado: boolean = false
    while(baixado === false){
        this.mao.getCartas().forEach(element => {
            if (element instanceof CartaPokemon) {
                this.pokemons.push(element)
                baixado = true
            }
        }
    )
    baixado = true
    }
  }

  maoInicial(): void{
    for (let i = 5; i > this.mao.size(); i++) {
        this.baralho.comprar(this.baralho, this.mao)
    }
  }

  usarCarta(cartaEscolhida: number): void{
    this.mao.getCartas()[cartaEscolhida].usarCarta(this)
  }

  adicionarCartaMao(): void {
    this.baralho.comprar(this.baralho, this.mao)
  }

  descartarCarta(): void {
    if (this.mao.size() > 0) {
      const descartada = this.mao.pop()
      this.descarte.push(descartada)
    }
  }

  exibirMao(): void {
    console.log("Mão:");
    this.mao.getCartas().forEach(c => c.exibirCarta())
  }

  exibirDescarte(): void {
    console.log("Descarte:");
    this.descarte.getCartas().forEach(c => c.exibirCarta())
  }
}