import { Carta } from "./carta";

export class Pilha <Carta> {
    private nomePilha: string
    private cartas: Carta[] = [];

    constructor(nome: string){
        this.nomePilha = nome
    }

    getCartas(): Carta[]{
        return this.cartas
    }

    // Empurra um elemento para a pilha
    push(carta: Carta): void {
        this.cartas.push(carta);
    };

    // Apaga o ultimo elemento da pilha
    pop(): Carta {
        return this.cartas.pop();
    };

    // Mostra o ultimo elemento da pilha
    peek(): Carta {
        return this.cartas[this.cartas.length - 1];
    };

    // Checa o tamanho da pilha
    size(): number {
        return this.cartas.length;
    };

    comprar(baralhoJogador: Pilha<Carta> , maoJogador: Pilha<Carta>){
        let compra = baralhoJogador.peek();
        maoJogador.push(compra);
        baralhoJogador.pop();
    };

    descartar(cartaUsada:number, maoJogador: Pilha<Carta>){
        let descarte = maoJogador.getCartas()[cartaUsada]
        this.cartas.push(descarte)
        maoJogador.getCartas().splice(cartaUsada, 1)
    };
};


