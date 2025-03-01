export class BlocoDeMadeira{
    private tipo:string
    private durabilidade:number

    setAtributos(tipo:string, durabilidade:number):void{
        this.tipo = tipo
        this.durabilidade = durabilidade
    }

    getAtributos():void{
        console.log(`Esse é o bloco de madeira do tipo ${this.tipo} e tem uma durabilidade de ${this.durabilidade} segundos.`)
    }
}

const madeira1 = new BlocoDeMadeira()
madeira1.setAtributos('Carvalho', 5)
const madeira2 = new BlocoDeMadeira()
madeira2.setAtributos('Bétula', 8)

madeira1.getAtributos()