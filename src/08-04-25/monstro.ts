import { Habilidade } from "./interfaceHabilidades"

export class Monstro {
    private nome: string
    private nivel: number
    private vida: number
    private resistencia: number
    private forca: number
    private velocidade: number

    constructor(nome: string, nivel:number, vida:number, resistencia:number, forca:number, velocidade:number){
        this.nome = nome
        this.nivel = nivel
        this.vida = vida
        this.resistencia = resistencia
        this.forca = forca
        this.velocidade = velocidade
    }

    getNome():string{
        return this.nome
    }

    receberDano(dano:number):void{
        dano -= this.resistencia
        this.vida -= dano
        console.log(`${this.nome} está com ${this.vida} de vida`)
    }
}