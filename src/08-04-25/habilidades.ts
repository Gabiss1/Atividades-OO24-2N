import { Cacador } from "./cacador";
import { Habilidade } from "./interfaceHabilidades";
import { Monstro } from "./monstro";

export class AtaqueFisico implements Habilidade{
    nome: string
    descricao: string
    classe: string
    valorEfeito: number

    constructor(nome:string, descricao:string, classe:string, valorEfeito:number){
        this.nome = nome
        this.descricao = descricao
        this.classe = classe
        this.valorEfeito = valorEfeito
    }

    usarHabilidade(nomeUsuario:string, alvo: Monstro):void{
        console.log(`${nomeUsuario} está usando a habilidade ${this.nome}!`)
        this.calcularEfeito(alvo)
    }

    calcularEfeito(alvo: Monstro):void{
        alvo.receberDano(this.valorEfeito)
        console.log(`${alvo.getNome()} recebeu ${this.valorEfeito} de dano.`)
    }
    exibirDescricao():void{
        console.log(`${this.descricao}.`)
    }
}

export class MagiaCura implements Habilidade{
    nome: string
    descricao: string
    classe: string
    valorEfeito: number

    constructor(nome:string, descricao:string, classe:string, valorEfeito:number){
        this.nome = nome
        this.descricao = descricao
        this.classe = classe
        this.valorEfeito = valorEfeito
    }

    usarHabilidade(nomeUsuario:string, alvo: Cacador):void{
        console.log(`${nomeUsuario} está usando a habilidade ${this.nome}!`)
        this.calcularEfeito(alvo)
    }

    calcularEfeito(alvo: Cacador):void{
        alvo.receberCura(this.valorEfeito)
        console.log(`${alvo.getNome()} foi curado em ${this.valorEfeito} pontos.`)
    }

    exibirDescricao():void{
        console.log(`${this.descricao}.`)
    }
}

export class MagiaAtaque implements Habilidade{
    nome: string
    descricao: string
    classe: string
    valorEfeito: number

    constructor(nome:string, descricao:string, classe:string, valorEfeito:number){
        this.nome = nome
        this.descricao = descricao
        this.classe = classe
        this.valorEfeito = valorEfeito
    }

    usarHabilidade(nomeUsuario:string, alvo: Monstro):void{
        console.log(`${nomeUsuario} está usando a habilidade ${this.nome}!`)
        this.calcularEfeito(alvo)
    }

    calcularEfeito(alvo: Monstro):void{
        alvo.receberDano(this.valorEfeito)
        console.log(`${alvo.getNome()} recebeu ${this.valorEfeito} de dano.`)
    }

    exibirDescricao():void{
        console.log(`${this.descricao}.`)
    }
}

export class MagiaFortalecimento implements Habilidade{
    nome: string
    descricao: string
    classe: string
    valorEfeito: number
    fortalecimento: string

    constructor(nome:string, descricao:string, classe:string, valorEfeito:number, fortalecimento:string){
        this.nome = nome
        this.descricao = descricao
        this.classe = classe
        this.valorEfeito = valorEfeito
        this.fortalecimento = fortalecimento
    }

    usarHabilidade(nomeUsuario:string, alvo: Cacador):void{
        console.log(`${nomeUsuario} está usando a habilidade ${this.nome}!`)
        this.calcularEfeito(alvo)
    }

    calcularEfeito(alvo: Cacador):void{
        if (this.fortalecimento === 'resistencia') {
            alvo.aumentarResistencia(this.valorEfeito)
            console.log(`A Resistência de ${alvo.getNome()} aumentou!`)
        } else if (this.fortalecimento === 'forca'){
            alvo.aumentarResistencia(this.valorEfeito)
            console.log(`A Força de ${alvo.getNome()} aumentou!`)
        } else if (this.fortalecimento === 'velocidade') {
            alvo.aumentarVelocidade(this.valorEfeito)
            console.log(`A Velocidade de ${alvo.getNome()} aumentou!`)
        } else {
            alvo.receberDano(this.valorEfeito)
            alvo.aumentarForca(this.valorEfeito)
            console.log(`A magia parace não ter funcionado corretamente, mas ${alvo.getNome()} ficou mais forte!`)
        }
    }

    exibirDescricao():void{
        console.log(`${this.descricao}`)
    }
}

export class habilidadeProtagonista {
    nome: string
    descricao: string
    classe: number
    valorEfeito = 0

    constructor(nome:string, descricao:string, classe:number){
        this.nome = nome
        this.descricao = descricao
        this.classe = classe
    }

    setEfeito(efeito:number){
        this.valorEfeito = efeito
    }
    
    arise(alvo: Monstro):void {
        if (alvo.getVida() > 0){
            console.log('Esta habilidade pode apenas ser usadas em corpos')
        } else {
            let index = 0
            while (index < 3 && this.valorEfeito === 0){
            this.valorEfeito = Math.floor(Math.random() * 2)
            index++
            } if (this.valorEfeito === 1) {
                alvo.serInvocado()
        }
        index = 0
        this.setEfeito(0)
    }
    }
}