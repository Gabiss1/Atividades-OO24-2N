export class Equipamento {
    nome: string
    descricao: string
    disponibilidade: boolean

    constructor(nome:string, descricao: string, disponibilidade: boolean){
        this.nome = nome
        this.descricao = descricao
        this.disponibilidade = disponibilidade
    }

    verificarDisponibilidade():void{
        if (this.disponibilidade === true) {
            console.log(`O equipamento ${this.nome} está disponível.`)
        } else {
            console.log(`O equipamento ${this.nome} não está disponível.`)
        }
    }

    getNome():string{
        return this.nome
    }

    getDescricao():string{
        return this.descricao
    }

    getDisponibilidade():boolean{
        return this.disponibilidade
    }
}