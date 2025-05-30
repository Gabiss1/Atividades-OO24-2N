import { Pessoa } from "./pessoa";

export class Noh <T>{
    protected value: T
    protected children: Noh <T>[] = []

    constructor(valueConstruct: T){
        this.value = valueConstruct
    }

    addChildren(pai: Pessoa, filho: Pessoa): void{}

    getChildren(): Noh<T>[]{
        return this.children
    }
}

