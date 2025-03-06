export class Personagem{
    private nome:string
    private vida:number
    private forca:number
    private inventario:Array<String>

    setAtributos(nome:string, vida:number, forca:number):void{
        this.nome = nome
        this.vida = vida
        this.forca = forca
    }

    setInventario(inventario:Array<String>):void{
        this.inventario = inventario
    }

    getNome():string{
        return this.nome
    }

    getVida():number{
        return this.vida
    }

    getForca():number{
        return this.forca
    }

    getInventario():void{
        console.log(`Este é o inventario de ${this.nome}:`)
        for (let i = 0; i < this.inventario.length; i++) {
            console.log(`${i+1} - ${this.inventario[i]}`)
        }
    }

}

const novoPersonagem = new Personagem()
novoPersonagem.setAtributos('Steve', 50, 10)
novoPersonagem.setInventario(['Espada de Diamante', 'Bloco de Madeira de Carvalho', 'Tocha'])

novoPersonagem.getInventario()