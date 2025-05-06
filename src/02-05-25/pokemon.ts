import { Carta } from "./carta"

export class Tipo {
    nome: string

    constructor(nome: string){
        this.nome = nome
    }

    getNome(): string{
        return this.nome
    }
}

export class Energia extends Carta{
    nome: string
    tipo: 'Pokemon' | 'Item' | 'Apoiador' | 'Energia'
    private tipoEnergia: Tipo

    constructor(nome: string, tipo: 'Pokemon' | 'Item' | 'Apoiador' | 'Energia', tipoEnergia: Tipo){
        super(nome, tipo)
        this.tipoEnergia = tipoEnergia
    }
    
    getNome(): string {
        return this.nome
    }

    getTipoCarta(): string {
        return this.tipo
    }

    getTipo(): Tipo {
        return this.tipoEnergia
    }

    exibirCarta(): void {
        
    }
}

export class Ataques {
    private nome: string
    private poder: number
    private energias: Energia[] = []

    constructor(nome: string, poder: number, energias: Energia[]){
        this.nome = nome
        this.poder = poder
        this.energias = energias
    }

    getNome(): string {
        return this.nome
    }

    getDano(): number {
        return this.poder
    }

    getCusto(): Energia[]{
        return this.energias
    }

    executarAtaque(alvo: Pokemon): void{
        alvo.receberDano(this.poder)
    }
}

export class Evolucao {
    estagio: number

    constructor(estagio: number){
        this.estagio = estagio
    }
}

export class Pokemon extends Carta{
    nome: string
    tipo: 'Pokemon' | 'Item' | 'Apoiador' | 'Energia'
    private tipoPokemon: Tipo
    private vida: number
    private ataques: Ataques[]
    private custoRecuo: number

    constructor(nome: string, tipo: 'Pokemon' | 'Item' | 'Apoiador' | 'Energia', tipoPoke: Tipo, vida: number, ataques: Ataques[], recuo: number){
        super(nome, tipo)
        this.tipoPokemon = tipoPoke
        this.vida = vida
        this.ataques = ataques
        this.custoRecuo = recuo
    }

    getNome(): string {
        return this.nome
    }

    getTipoCarta(): string {
        return this.tipo
    }

    getTipo(): Tipo {
        return this.tipoPokemon
    }

    getVida(): number {
        return this.vida
    }

    exibirCarta(): void {
        
    }

    verificarAtaque(): void{
        
    }

    atacar(alvo: Pokemon): void {
        let ataqueEscolhido = this.ataques[Math.floor(Math.random()*this.ataques.length)]
        console.log(`\n${this.nome} está usando o ataque ${ataqueEscolhido.getNome()} em ${alvo.getNome()}!`)
        ataqueEscolhido.executarAtaque(alvo)
    }

    recuar(): void {}

    receberDano(dano: number): void {
        this.vida -= dano
        console.log(`\n${this.nome} recebeu ${dano} de dano!`)
        console.log(`${this.nome} está com ${this.vida} de vida!\n`)
    }
}