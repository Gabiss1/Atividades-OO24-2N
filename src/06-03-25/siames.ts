import { Cat } from "./protected";

class Siames extends Cat{
    public showRaceSiames():String{
        return this.getRace()
    }
}

let meuGato = new Siames('Sapato', 5.5, 'SRD')
console.log(meuGato.showRaceSiames())