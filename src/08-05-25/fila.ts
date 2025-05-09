class Fila <T>{
    private elementos: T[] = []

    enfileirar(item: T): void{
        this.elementos.push(item)
    }

    estaVazia(): boolean{
        return this.elementos.length === 0
    }

    desenfileirar(): T | undefined{
        if (this.estaVazia()) {
            console.log('A Fila está vazia.')
            return undefined
        }
        return this.elementos.shift()
    }

    primeiro(): T | undefined{
        if (this.estaVazia()) {
            console.log('A Fila está vazia.')
            return undefined
        }
        return this.elementos[0]
    }

    tamanho(): number{
        return this.elementos.length
    }
}

const filaDeClientes = new Fila()

filaDeClientes.enfileirar('Cliente 1')
filaDeClientes.enfileirar('Cliente 2')
filaDeClientes.enfileirar('Cliente 3')

console.log(`Próximo cliente a ser atendido: ${filaDeClientes.desenfileirar()}`)
console.log(`Próximo cliente a ser atendido: ${filaDeClientes.desenfileirar()}`)
console.log(`A Fila está vazia: ${filaDeClientes.estaVazia()}`)
