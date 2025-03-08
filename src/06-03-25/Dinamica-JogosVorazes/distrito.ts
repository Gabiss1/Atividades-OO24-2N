export class Districts{
    public name: string;
    private resources: string[];
    private population: number;

setAtributes(name:string, resources:string[], population:number):void{
    this.name = name
    this.resources = resources
    this.population = population
}

getAtributes(){
    console.log(`Esse é ${this.name}, e seu principal recurso é ${this.resources[0].toLowerCase()} e sua população é de ${this.population} pessoas`)
}
 getName():string{
    return this.name
}
 getResources():string[]{
return this.resources
}

 getPopulation():number{
    return this.population
}
}

// distrito1.getAtributes()
// distrito2.getAtributes()
// distrito3.getAtributes()
// distrito4.getAtributes()
// distrito5.getAtributes()
// distrito6.getAtributes()
// distrito7.getAtributes()
// distrito8.getAtributes()
// distrito9.getAtributes()
// distrito10.getAtributes()
// distrito11.getAtributes()
// distrito12.getAtributes()
// distrito13.getAtributes()