export class Cat{
    name:string;
    weight:number;

    meow():void{
        console.log('Meow Meow')
    };
    eat(quantity:number):void{
        console.log(`The cat has eaten ${quantity}`)
    };

    constructor(name:string, weight:number){
        this.name = name,
        this.weight = weight
    }
}


const meuGato = new Cat('Sapato', 7)
console.log(meuGato)
meuGato.meow()
meuGato.eat(15)