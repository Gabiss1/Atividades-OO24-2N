export class Cat{
    private name:string;
    private weight:number;

    meow():void{
        console.log('Meow Meow')
    };
    eat(quantity:number):void{
        console.log(`The cat has eaten ${quantity}`)
    };

    setName(nome:string):void{
        this.name = nome
    }

    getName():string{
        return this.name
    }

    // constructor(name:string, weight:number){
    //     this.name = name,
    //     this.weight = weight
    // }
}


const meuGato = new Cat()

meuGato.setName('Sapato')
meuGato.meow()
meuGato.eat(15)
console.log(meuGato)