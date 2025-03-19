export class Animal {
    private name: string
    private specie: string
    private weight: number
    private hungerAndThirst: number

    constructor(animalName:string, animalSpecie:string, animalWeight:number, animalHungerAndThirst:number){
        this.name = animalName
        this.specie = animalSpecie
        this.weight = animalWeight
        this.hungerAndThirst = animalHungerAndThirst
    }

    setHungerAndThirst(hungerAndThirst:number){
        this.hungerAndThirst = hungerAndThirst
    }

    protected feed(quantity:number){
        this.hungerAndThirst += quantity
    }

    protected eat(quantity:number):void{
        console.log(`The Animal has eaten ${quantity}`)
    }

    feeding(quantity:number):void{
        this.eat(quantity)
        this.feed(quantity)
    }
}

