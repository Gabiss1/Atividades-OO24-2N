import { BlocoDeMadeira } from './blocoMadeira'
import { Espadas } from './espadaDeDiamante'
import { Monstros } from './monstro'
import { Personagem } from "./personagem";

export class Mundo{
    blocos:Array<Object>

    setAtributos(blocos:Array<Object>):void{
        this.blocos = blocos
    }

    exibirMundo():void{
        console.log(this.blocos)
    }

    
}

const madeira1 = new BlocoDeMadeira()
madeira1.setAtributos('Carvalho', 5)

const novoMundo = new Mundo()
novoMundo.setAtributos([madeira1])

novoMundo.exibirMundo()