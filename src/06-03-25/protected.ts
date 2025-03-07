export class Cat{
    public name:string;
    protected race:String
    private weight:number;

    public getName():void{
        console.log(this.name)
    }

    public meow():void{
        console.log('Meow Meow')
        console.log(this.getRace())
    };

    public eat(quantity:number):void{
        console.log(`The cat has eaten ${quantity}`)
        console.log(this.getWeight())
    };

    protected getRace():String{
        return this.race
    }

    private getWeight():number{
        return this.weight
    }

    constructor(name:string, weight:number, race:String){
        this.name = name,
        this.weight = weight
        this.race = race
    }
}


const meuGato = new Cat('Sapato', 5.5, 'SRD')

meuGato.meow()
meuGato.eat(15)
meuGato.getName()