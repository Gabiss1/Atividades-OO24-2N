import { BlocoDeMadeira } from "./blocoMadeira";
import { Espadas } from "./espadaDeDiamante";

export class Inventario{
    blocos: Array<BlocoDeMadeira> = []
    ferramentas: Array<Espadas> = []

    setBlocos(bloco:Array<BlocoDeMadeira>):void{
        this.blocos = bloco
    }

    setFerramentas(ferramenta:Array<Espadas>):void{
        this.ferramentas = ferramenta
    }

    getInventario():void{
        console.log('Esses são os itens no seu inventário:')
        for (let i = 0; i < this.blocos.length; i++) {
            console.log(`${i+1} - Bloco de Madeira de ${this.blocos[i].getTipo()}`)
        }
        for (let i = 0; i < this.ferramentas.length; i++) {
            console.log(`${i+1+this.blocos.length} - ${this.ferramentas[i].getNome()}`)
        }
    }

    deleteItem(tipo:string, remover:number):void{
        if (tipo.toLowerCase() === 'bloco') {
            this.blocos.splice(remover, 1)
            console.log(`Item ${remover+1} removido do inventário com sucesso! Inventário atualizado:`)
        } else if (tipo.toLowerCase() === 'ferramenta'){
            this.ferramentas.splice(remover, 1)
            console.log(`Item ${remover+1} removido do inventário com sucesso! Inventário atualizado:`)
        } else {
            console.log(`Não há itens do Tipo ${tipo} no seu inventário!`)
        }

        for (let i = 0; i < this.blocos.length; i++) {
            console.log(`${i+1} - Bloco de Madeira de ${this.blocos[i].getTipo()}`)
        }
        for (let i = 0; i < this.ferramentas.length; i++) {
            console.log(`${i+1+this.blocos.length} - ${this.ferramentas[i].getNome()}`)
        }
    }
}

const madeira1 = new BlocoDeMadeira()
madeira1.setAtributos('Carvalho', 5)
const madeira2 = new BlocoDeMadeira()
madeira2.setAtributos('Bétula', 8)

const novaEspada = new Espadas()
novaEspada.setAtributos('Espada de Diamante', 30, 50)
const novaEspada1 = new Espadas()
novaEspada1.setAtributos('Espada de Ferro', 22, 40)

const novoInventario = new Inventario()
novoInventario.setBlocos([madeira1, madeira2])
novoInventario.setFerramentas([novaEspada, novaEspada1])

// novoInventario.getInventario()
// novoInventario.deleteItem('bloco',0)
// novoInventario.deleteItem('ferramenta', 0)
// novoInventario.deleteItem('monstro', 0)

export class Jogador{
    inventario:Array<Inventario>

    setInventario(inventario:Array<Inventario>):void{
        this.inventario = inventario
    }

    mostrarInventario():void{
        this.inventario[0].getInventario()
    }
}

const novoJogador = new Jogador()
novoJogador.setInventario([novoInventario])
novoJogador.mostrarInventario()