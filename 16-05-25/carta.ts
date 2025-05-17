export class Cor{
    nome: string

    constructor(cor: string){
        this.nome = cor
    }

    getNome(): string{
        return this.nome
    }
}

export class Carta {
    valorCarta: number
    cor: Cor

    constructor(valorCarta: number, cor: Cor){
        this.valorCarta = valorCarta
        this.cor = cor
    }

    getValor(): number {
        return this.valorCarta
    }

    getCor(): Cor{
        return this.cor
    }
}




const azul = new Cor('Azul')
const verde = new Cor('Verde')
const amarelo = new Cor('Amarelo')
const laranja = new Cor('Laranja')
const preto = new Cor('Preto')

const listaCores = [azul, verde, amarelo, laranja]

let baralho = []

let descarte = []

for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 10; i++) {
        const element = new Carta(i, listaCores[j])
        baralho.push(element)
    }   
}

console.table(baralho)

let topo = baralho.pop()

descarte = baralho
baralho = []

baralho.push(topo)
console.table(baralho)


