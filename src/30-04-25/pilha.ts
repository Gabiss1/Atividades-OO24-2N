class Pilha<T>{
    private elementos: T[] = []
    
    // Coloca item na pilha
    push(item: T): void{
        this.elementos.push(item)
    }

    // Remove último item da pilha e retorna ele
    pop(): T | undefined {
        return this.elementos.pop()
    }

    // Exibe o último item da pilha
    peek(): T | undefined {
        return this.elementos[this.elementos.length -1]
    }

    // Verifica se a pilha está vazia
    isEmpty(): boolean {
        return this.elementos.length === 0
    }

    // Retorna o tamanho da pilha    
    size(): number{
        return this.elementos.length
    }

    // Remove todos os itens da pilha
    clear(): void{
        this.elementos = []
    }
}

const minhaPilha = new Pilha<number>()

minhaPilha.push(1)
minhaPilha.push(2)
minhaPilha.push(3)
minhaPilha.push(4)

console.log(minhaPilha.pop()) // 4
console.log(minhaPilha.peek()) // 3
console.log(minhaPilha.size()) // 3
console.log(minhaPilha.isEmpty()) // false

minhaPilha.clear()

console.log(minhaPilha.isEmpty()) // true