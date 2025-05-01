class PilhaPratos <T>{
    private elementos: T[] = []

    empilharPrato(item: T): void{
        this.elementos.push(item)
    }

    mostrarUltimoPrato(): T | undefined {
        return this.elementos[this.elementos.length-1]
    }

    quantosPratosTem(): number {
        return this.elementos.length
    }

    limparPrato(): T | undefined{
        return this.elementos.pop()
    }

    estaVazia(): boolean{
        return this.elementos.length === 0
    }

    limparPratos(): void{
        this.elementos = []
    }
}

const novaPilhaPratos = new PilhaPratos<string>()

novaPilhaPratos.empilharPrato('Prato de Frutos do Mar')
novaPilhaPratos.empilharPrato('Prato de Sobremesa')
novaPilhaPratos.empilharPrato('Prato Fundo')
novaPilhaPratos.empilharPrato('Prato de Pão')
novaPilhaPratos.empilharPrato('Prato de Porcelana Folhada')

console.log(novaPilhaPratos.limparPrato())
console.log(novaPilhaPratos.mostrarUltimoPrato())
console.log(novaPilhaPratos.estaVazia())
console.log(novaPilhaPratos.quantosPratosTem()) 

novaPilhaPratos.limparPratos()

console.log(novaPilhaPratos.estaVazia())