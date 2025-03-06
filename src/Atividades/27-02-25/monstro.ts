export class Monstros{
    private nome:string
    private vida:number
    private poderDeExplosao:number
    private alcanceDeExplosao:number

    setAtributos(nome:string, vida:number, poderDeExplosao:number, alcanceDeExplosao:number):void{
        this.nome = nome
        this.vida = vida
        this.poderDeExplosao = poderDeExplosao
        this.alcanceDeExplosao = alcanceDeExplosao
    }

    getMonstro():void{
        console.log(`Esse monstro é o ${this.nome}, ele tem ${this.vida} de vida, seu poder de explosão é de ${this.poderDeExplosao} pontos e tem um alcance de ${this.alcanceDeExplosao} blocos`)
    }

    getNome():string{
        return this.nome
    }

    getVida():number{
        return this.vida
    }

    getPoderExplosao():number{
        return this.poderDeExplosao
    }

    getAlcanceExplosao():number{
        return this.alcanceDeExplosao
    }
}

const monstro1 = new Monstros()
monstro1.setAtributos('Creeper', 60, 75, 3)

monstro1.getMonstro()