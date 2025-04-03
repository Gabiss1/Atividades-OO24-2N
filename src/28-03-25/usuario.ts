export class Usuario {
    protected nome: string
    protected email: string

    constructor(nome:string, email:string){
        this.nome = nome
        this.email = email
    }

    getNome():string{
        return this.nome
    }

    getEmail():string{
        return this.email
    }

    getUsuario():string{
        return `Nome: ${this.nome}\nEmail: ${this.email}`
    }  
}