import { BlocoDeMadeira } from './blocoMadeira'
import { Espadas } from './espadaDeDiamante'

export class Personagem{
    private nome:string
    private vida:number
    private forca:number
    private inventario:Array<Object> = [{

    }]

    setAtributos(nome:string, vida:number, forca:number):void{
        this.nome = nome
        this.vida = vida
        this.forca = forca
    }

    setInventario(inventario:Array<Object>):void{
        this.inventario = inventario
    }

    
}

const novoPersonagem = new Personagem()
novoPersonagem.setAtributos('Steve', 50, 10)
