// Desafio: Poção e Ingredientes 

export class Pocao{
    private nome:string
    private ingredientes:Array<Object>
    private efeito:string

    setAtributos(nome:string, ingrediente:Array<Object>, efeito:string):void{
        this.nome = nome
        this.ingredientes = ingrediente
        this.efeito = efeito
    }

    setIngredientes(ingrediente:Array<Object>):void{
        this.ingredientes = ingrediente
    }

    getIngredientes():void{
        console.log(this.ingredientes)
    }

    exibirPocao():void{
        console.log(`
A Poção do morto vivo
Efeito: ${this.efeito}
Ingredientes: ${this.ingredientes[0]} e ${this.ingredientes[1]}`)
    }
}

export class Ingrediente{
    private nome:string
    private quantidade:number
    private efeito:string

    setAtributos(nome:string, quantidade:number, efeito:string):void{
        this.nome = nome,
        this.quantidade = quantidade,
        this.efeito = efeito
    }

    exibirIngrediente():string{
        return `${this.nome} e ${this.efeito}`
    }

    getAtributos():string{
        return `${this.nome} Quantidade - ${this.quantidade} Efeito - ${this.efeito}.`
    }
}

const ingrediente1 = new Ingrediente()
ingrediente1.setAtributos('Vagem Soporífera', 1, 'Sono')
const ingrediente2 = new Ingrediente()
ingrediente2.setAtributos('Raíz de Afódelo em Pó', 1, 'Prolongamento de Sono')

const pocao1 = new Pocao()
pocao1.setAtributos('Poção do Morto-Vivo',[ingrediente1.getAtributos(), ingrediente2.getAtributos()], 'Faz a pessoa entrar em um sono profundo similar a morte.')

pocao1.getIngredientes()
pocao1.exibirPocao()