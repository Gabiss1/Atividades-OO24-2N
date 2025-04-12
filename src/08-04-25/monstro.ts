import { Cacador } from "./cacador"

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

    getVida():number{
        return this.vida
    }

    getVelocidade():number{
        return this.velocidade
    }

    atacarCacador(alvo: Cacador):void{
        alvo.receberDano(this.forca)
    }

    receberDano(dano:number):void{
        dano -= this.resistencia
        this.vida -= dano
        if (this.vida > 0) {
            console.log(`${this.nome} está com ${this.vida} de vida`)
        } else if(this.vida <= 0){
            console.log(`${this.nome} está com 0 de vida`)
        }
    }
}