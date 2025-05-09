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

  exibirCarta(): void {}
}

export class Tipo {
  private nome: string
  private simboloEnergia: string

  constructor(nome: string, simbolo: string) {
    this.nome = nome
    this.simboloEnergia = simbolo
  }

  getNome(): string {
    return this.nome
  }

  getSimbolo(): string{
    return this.simboloEnergia
  }
}

export class CartaPokemon extends Carta {
  nome: string
  tipo: 'Pokemon' | 'Item' | 'Apoiador' | 'Energia'
  private tipoPokemon: Tipo
  private vida: number
  private ataques: Ataques[]
  private custoRecuo: number

  constructor(nome: string, tipo: 'Pokemon' | 'Item' | 'Apoiador' | 'Energia', vida: number, ataques: Ataques[], custoRecuo: number) {
    super(nome, tipo)
    this.vida = vida
    this.ataques = ataques
    this.custoRecuo = custoRecuo
  }

  getNome(): string {
    return this.nome
  }

  getTipoCarta(): string {
    return this.tipo
  }

  getAtaques(): Ataques[]{
    return this.ataques
  }

  getTipo(): Tipo {
    return this.tipoPokemon
  }

  getVida(): number {
    return this.vida
  }

  getRecuo(): number{
    return this.custoRecuo
  }

  atacar(alvo: CartaPokemon): void {
    let ataqueEscolhido = this.ataques[Math.floor(Math.random() * this.ataques.length)]
    console.log(`\n${this.nome} está usando o ataque ${ataqueEscolhido.getNome()} em ${alvo.getNome()}!`)
    ataqueEscolhido.executarAtaque(alvo)
  }

  recuar(): void { }

  receberDano(dano: number): void {
    this.vida -= dano
    console.log(`\n${this.nome} recebeu ${dano} de dano!`)
    console.log(`${this.nome} está com ${this.vida} de vida!\n`)
  }

  exibirCarta(): void {
    console.log(`
    Nome: ${this.getNome()}
    Tipo Carta: ${this.getTipoCarta()}
    Tipo Pokemon: ${this.getTipo()}
    Vida: ${this.getVida()}
    Ataques: ${this.getAtaques()[0]}
    Recuo: ${this.getRecuo()}
    `)
    this.ataques.forEach(ataque => {
      console.log(`${ataque.getNome()} - Dano: ${ataque.getDano()} - Custo: ${ataque.getCusto()}`)
    });
  }

}

export class Ataques {
  private nome: string
  private poder: number
  private energias: CartaEnergia[] = []

  constructor(nome: string, poder: number, energias: CartaEnergia[]) {
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

  getCusto(): string {
    let custoCompleto = ''
    this.energias.forEach(energia => {
      let simbolo = energia.getTipoEnergia().getSimbolo()
      custoCompleto += `${simbolo} - `
    });
    return custoCompleto
  }

  executarAtaque(alvo: CartaPokemon): void {
    alvo.receberDano(this.poder)
  }
}

export class CartaEnergia extends Carta {
  nome: string
  tipo: 'Pokemon' | 'Item' | 'Apoiador' | 'Energia'
  private tipoEnergia: Tipo

  constructor(nome: string, tipo: 'Pokemon' | 'Item' | 'Apoiador' | 'Energia', tipoEnergia: Tipo) {
    super(nome, tipo);
  }

  getTipoEnergia(): Tipo {
    return this.tipoEnergia
  }

}