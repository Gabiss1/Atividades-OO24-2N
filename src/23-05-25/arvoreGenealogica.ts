import { Pessoa } from "./pessoa";
import { Noh } from "./noh";

export class ArvoreGenealogica extends Noh<Pessoa>{
    
    constructor(valor: Pessoa){
        super(valor)
    }

    addChildren(pai: Pessoa, filho: Pessoa): void{
        pai.addChildren(filho)
    }
}