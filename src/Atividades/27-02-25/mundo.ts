import { BlocoDeMadeira } from './blocoMadeira'
import { Espadas } from './espadaDeDiamante'
import { Monstros } from './monstro'
import { Personagem } from "./personagem";

export class Mundo{
    blocosMadeira:Array<BlocoDeMadeira>

    setAtributos(blocos:Array<BlocoDeMadeira>):void{
        this.blocosMadeira = blocos
    }

    exibirBlocos():void{

        for (let i = 0; i < this.blocosMadeira.length; i++) {
            this.blocosMadeira[i].getAtributos()
        }
    }

    exibirMundo():void{
        console.log('Lista de Madeiras do Mundo:')
        for (let i = 0; i < this.blocosMadeira.length; i++) {
            console.log(`${i+1} - ${this.blocosMadeira[i].getTipo()}`)
            
        }
    }

    
}

const madeira1 = new BlocoDeMadeira()
const madeira2 = new BlocoDeMadeira()
const madeira3 = new BlocoDeMadeira()
madeira1.setAtributos('Carvalho', 25)
madeira2.setAtributos('Araucária', 18)
madeira3.setAtributos('Bétula', 28)

const novoMundo = new Mundo()
novoMundo.setAtributos([madeira1, madeira2, madeira3])

novoMundo.exibirBlocos()
novoMundo.exibirMundo()