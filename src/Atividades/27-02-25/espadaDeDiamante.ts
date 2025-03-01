// export class EspadaDeDiamante{
//     dano:number
//     durabilidade:number

//     setAtributos(dano:number, durabilidade:number):void{
//         this.dano = dano
//         this.durabilidade = durabilidade
//     }

//     exibirEspada():void{
//         console.log(`Esta é a Espada de Diamante, ela tem ${this.dano} pontos de dano e durabilidade de ${this.durabilidade} pontos.`)
//     }
// }

export class Espadas{
    private nome:string
    private dano:number
    private durabilidade:number

    setAtributos(nome:string, dano:number, durabilidade:number):void{
        this.nome = nome
        this.dano = dano
        this.durabilidade = durabilidade
    }

    exibirEspada():void{
        console.log(`Esta é a ${this.nome}, ela tem ${this.dano} pontos de dano e durabilidade de ${this.durabilidade} pontos.`)
    }
}

const novaEspada = new Espadas()
novaEspada.setAtributos('Espada de Diamante', 30, 50)
const novaEspada1 = new Espadas()
novaEspada1.setAtributos('Espada de Ferro', 22, 40)

novaEspada.exibirEspada()
novaEspada1.exibirEspada()