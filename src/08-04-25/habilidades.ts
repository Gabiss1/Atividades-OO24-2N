import { Cacador } from "./cacador";
import { Habilidade } from "./interfaceHabilidades";
import { Monstro } from "./monstro";

export class AtaqueFisico implements Habilidade{
    nome: string
    descricao: string
    classe: number
    valorEfeito: number

    constructor(nome:string, descricao:string, classe:number, valorEfeito:number){
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
        alvo.vida -= this.valorEfeito
        console.log(`${alvo.nome} recebeu ${this.valorEfeito} de dano.`)
    }
    exibirDescricao():void{
        console.log(`${this.descricao}.`)
    }
}

export class MagiaCura implements Habilidade{
    nome: string
    descricao: string
    classe: number
    valorEfeito: number

    constructor(nome:string, descricao:string, classe:number, valorEfeito:number){
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
        alvo.vida += this.valorEfeito
        console.log(`${alvo.nome} foi curado em ${this.valorEfeito} pontos.`)
    }

    exibirDescricao():void{
        console.log(`${this.descricao}.`)
    }
}

export class MagiaAtaque implements Habilidade{
    nome: string
    descricao: string
    classe: number
    valorEfeito: number

    constructor(nome:string, descricao:string, classe:number, valorEfeito:number){
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
        alvo.vida -= this.valorEfeito
        console.log(`${alvo.nome} recebeu ${this.valorEfeito} de dano.`)
    }

    exibirDescricao():void{
        console.log(`${this.descricao}.`)
    }
}

export class MagiaFortalecimento implements Habilidade{
    nome: string
    descricao: string
    classe: number
    valorEfeito: number
    fortalecimento: string

    constructor(nome:string, descricao:string, classe:number, valorEfeito:number, fortalecimento:string){
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
            alvo.resistencia += this.valorEfeito
            console.log(`A Resistência de ${alvo.nome} aumentou!`)
        } else if (this.fortalecimento === 'forca'){
            alvo.forca += this.valorEfeito
            console.log(`A Força de ${alvo.nome} aumentou!`)
        } else if (this.fortalecimento === 'velocidade') {
            alvo.velocidade += this.valorEfeito
            console.log(`A Velocidade de ${alvo.nome} aumentou!`)
        } else {
            alvo.vida -= this.valorEfeito
            alvo.forca += this.valorEfeito
            console.log(`A magia parace não ter funcionado corretamente, mas ${alvo.nome} ficou mais forte!`)
        }
    }

    exibirDescricao():void{
        console.log(`${this.descricao}`)
    }
}