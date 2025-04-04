interface Animal{
    nome: string
    emitirSom():void
}

interface Voador{
    nome: string
    voar():void
}

interface Aquatico{
    nome: string
    nadar():void
}

class Cachorro implements Animal{
    nome: string
    constructor(nome:string){
        this.nome = nome
    }

    emitirSom(): void {
        console.log(`${this.nome} está Latindo: Au Au!`)
    }
}

const cachorro1 = new Cachorro('Boltund')

cachorro1.emitirSom()

class Pato implements Animal, Voador, Aquatico{
    nome: string
    
    constructor(nome:string){
        this.nome = nome
    }

    emitirSom(): void {
        console.log(`${this.nome} está Grasnando: Quack Quack!`)
    }

    nadar(): void {
        console.log(`${this.nome} está Nadando!`)
    }

    voar(): void {
        console.log(`${this.nome} está Voando!`)
    }
}

let pato1 = new Pato('Gesonel')
pato1.emitirSom()
pato1.voar()
pato1.nadar()

interface Lista<T>{
    adicionar(item: T): void
    remover(item: T): void
    tamanho(): number
}

class ListaNumerica implements Lista<number>{
    private items: number[] = []

    adicionar(item: number): void {
        this.items.push(item)
    }

    remover(item: number):void{
        const index = this.items.indexOf(item)
        if (index !== -1) {
            this.items.splice(index, 1)
        }
    }

    tamanho(): number {
        return this.items.length
    }
}

const lista1 = new ListaNumerica()
lista1.adicionar(5)
lista1.adicionar(2)

console.log(lista1.tamanho())

lista1.remover(5)

console.log(lista1.tamanho())