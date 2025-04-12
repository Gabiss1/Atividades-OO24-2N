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
        if (dano > 0) {
            this.vida -= dano
        if (this.vida > 0) {
            console.log(`${this.nome} está com ${this.vida} de vida`)
        } else if(this.vida <= 0){
            console.log(`${this.nome} está com 0 de vida`)
        }
        } else {
            console.log(`${this.nome} não sofreu dano.`)
        }
    }

    serInvocado(): void {
        let index = 0
        let chanceDeInvocar

        if (this.vida > 1) {
            console.log('Esta habilidade pode apenas ser usadas em corpos')
        } else {
            chanceDeInvocar = 0;
            while (index < 3 && chanceDeInvocar === 0) {
                chanceDeInvocar = Math.floor(Math.random() * 2)
                index++
                if (chanceDeInvocar === 1) {
                    this.nome = 'Shadow ' + this.nome;
                    this.vida = this.vida * 1.5;
                    this.forca = this.forca * 1.5;
                    console.log(`O monstro ${this.nome} foi invocado com sucesso`)
                } else {
                    console.log(`Tentativa de invocação falhou [${index}]`)
                }
            } 
        }
    }
}