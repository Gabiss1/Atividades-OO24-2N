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

    exibirInformacoes():void{
        console.log(`Nome do Usuário: ${this.nome} - Email: ${this.email}`)
    }  
}