export class Evolucao {
    estagio: number

    constructor(estagio: number){
        this.estagio = estagio
    }
}

export class Energia {
    nome: string
    tipo: string

    constructor(nome: string, tipo: string){
        this.nome = nome
        this.tipo = tipo
    }
}

export class Ataques {
    nome: string
    poder: number
    energias: Energia[] = []

    constructor(nome: string, poder: number, energias: Energia[]){
        this.nome = nome
        this.poder = poder
        this.energias = energias
    }
}

export interface Pokemon {
    nome: string
    evolucao: Evolucao
    vida: number
    ataques: Ataques[]
    custoRecuo: number

    atacar(): void
    recuar(): void
    receberDano(): void
}