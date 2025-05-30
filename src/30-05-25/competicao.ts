export abstract class Competicao{
    protected nome: string

    constructor(nome: string){
        this.nome = nome
    }
   
    valorTitulo(): void{}
}

export class Estadual extends Competicao{

    constructor(nome: string){
        super(nome)
    }

    valorTitulo(): void {
        
    }
}

export class Nacional extends Competicao{

    constructor(nome: string){
        super(nome)
    }

    valorTitulo(): void {
        
    }
}

export class Continental extends Competicao{

    constructor(nome: string){
        super(nome)
    }

    valorTitulo(): void {
        
    }
}

// export class Mundial extends Competicao{

//     constructor(nome: string){
//         super(nome)
//     }

//     valorTitulo(): void {
        
//     }
// }