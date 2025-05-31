export abstract class Competicao{
    protected nome: string

    constructor(nome: string){
        this.nome = nome
    }
   
    valorTitulo(): void{}
    getNome(): void {}
}

export class Estadual extends Competicao{

    constructor(nome: string){
        super(nome)
    }

    valorTitulo(): void {
        
    }
    
    getNome(): void {
        console.log(this.nome)
    }
}

export class Nacional extends Competicao{

    constructor(nome: string){
        super(nome)
    }

    valorTitulo(): void {
        
    }

    getNome(): void {
        console.log(this.nome)
    }
}

export class Continental extends Competicao{

    constructor(nome: string){
        super(nome)
    }

    valorTitulo(): void {
        
    }

    getNome(): void {
        console.log(this.nome)
    }
}

// export class Mundial extends Competicao{

//     constructor(nome: string){
//         super(nome)
//     }

//     valorTitulo(): void {
        
//     }
// }