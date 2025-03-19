import { Animal } from "./flow";

export class Cat extends Animal{
    constructor(name:string, specie:string, weight:number, hungerAndThirst:number){
        super(name, specie, weight, hungerAndThirst)
    }

    meow():void{
        console.log('Meow Meow!')
    }
}

function feedItSelf(animal:Animal, quantity:number) {
    animal.feeding(quantity)
}

const gato = new Cat('Gato', 'Preto', 3, 100)

feedItSelf(gato, 15)