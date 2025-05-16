class Deck <T>{
    private elementos: T[] = []

    addNoInicio(item: T): void{
        this.elementos.unshift(item)
    }

    addNoFinal(item: T): void{
        this.elementos.push(item)
    }

    removerDoInicio(): T | undefined{
        return this.elementos.shift()
    }

    removerDoFinal(): T | undefined{
        return this.elementos.pop()
    }

    primeiro(): T | undefined {
        return this.elementos[0]
    }

    ultimo(): T | undefined {
        return this.elementos[this.elementos.length-1]
    }

    estaVazio(): boolean {
        return this.elementos.length === 0
    }

    tamanho(): number {
        return this.elementos.length
    }

    limpar(): void{
        this.elementos = []
    }
}

const meuDeck = new Deck<number>()

meuDeck.addNoInicio(1)
meuDeck.addNoInicio(2)
meuDeck.addNoFinal(3)
meuDeck.addNoFinal(4)

console.log(`Primeiro elemento: ${meuDeck.primeiro()}`)
console.log(`Último elemento: ${meuDeck.ultimo()}`)
console.log(`Tamanho do Deck: ${meuDeck.tamanho()}`)
console.log(`Tira do início: ${meuDeck.removerDoInicio()}`)
console.log(`Tira do final: ${meuDeck.removerDoFinal()}`)
console.log(`Último elemento: ${meuDeck.ultimo()}`)
console.log(`Tamanho do Deck: ${meuDeck.tamanho()}`)

meuDeck.limpar()
console.log(`Deck está vazio? ${meuDeck.estaVazio()}`)