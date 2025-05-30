export class Node <T>{
    protected value: T
    protected children: Node <T>[] = []

    constructor(valueConstruct: T){
        this.value = valueConstruct
    }

    addChildren(nodeT: Node<T>): void{
        this.children.push(nodeT)
    }

    getChildren(): Node<T>[]{
        return this.children
    }
}

const rootNode = new Node("A")
const nodeB = new Node("B")
const nodeC = new Node("C")

rootNode.addChildren(nodeB)
rootNode.addChildren(nodeC)

console.log(rootNode.getChildren())
console.log(nodeB.getChildren())