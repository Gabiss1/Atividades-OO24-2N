export class Node <T>{
    private raiz: T
    private filhos: Node<T>[] = []

    constructor(raiz: T){
        this.raiz = raiz
    }

    addChildren(filho: Node<T>): void{
        this.filhos.push(filho)
    }
}