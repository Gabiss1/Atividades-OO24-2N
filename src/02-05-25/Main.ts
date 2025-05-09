import { CartaPokemon, CartaEnergia, CartaItem, CartaTreinador } from "./Carta.js";
import { Baralho } from "./Baralho.js";
import { Tabuleiro } from "./Tabuleiro.js";

const cartas = [
  new CartaPokemon("Charmander", "Fogo", 50, 60),
  new CartaEnergia("Energia Fogo", "Fogo", 20),
  new CartaItem("Poção", "Normal", "Cura 20 HP"),
  new CartaTreinador("Professor Carvalho", "Normal", "Compre 2 cartas"),
  new CartaPokemon("Squirtle", "Água", 40, 50),
];

const baralho = new Baralho();
baralho.embaralhar(cartas);

const tabuleiro = new Tabuleiro();

for (let i = 0; i < 3; i++) {
  const carta = baralho.comprarCarta();
  if (carta) tabuleiro.adicionarCartaMao(carta);
}

tabuleiro.exibirMao();
console.log("Topo do baralho:");
baralho.visualizarTopo()?.exibirCarta();

tabuleiro.descartarCarta();
tabuleiro.exibirDescarte();