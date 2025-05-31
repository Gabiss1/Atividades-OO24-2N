import { Competicao} from "./competicao"

export class Node<T>{
    private raiz: Competicao
    private filhos: Node<Competicao>[] = []

    constructor(raiz: Competicao){
        this.raiz = raiz
    }

    addChildren(filho: Node<T>): void{
        this.filhos.push(filho)
    }

    getChildren(): Node<Competicao>[]{
        return this.filhos
    }

    infosChildren(): void{
        for (let i = 0; i < this.filhos.length; i++) {
            this.filhos[i].getChildren()[i].infosChildren()
        }
    }

}