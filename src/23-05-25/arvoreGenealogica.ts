import { Pessoa } from "./pessoa";

export class ArvoreGenealogica{
    private root: Pessoa
    private filhos: Pessoa[]

    addChildren(pai: Pessoa, filho: Pessoa): void{
        pai.addChildren(filho)
    }
}