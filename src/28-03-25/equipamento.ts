export class Equipamento {
    nome: string
    descricao: string
    disponibilidade: boolean

    constructor(nome:string, descricao: string, disponibilidade: boolean){
        this.nome
        this.descricao
        this.disponibilidade
    }

    verificarDisponibilidade():void{
        if (this.disponibilidade === true) {
            console.log(`O equipamento ${this.nome} está disponível.`)
        } else {
            console.log(`O equipamento ${this.nome} não está disponível.`)
        }
    }
}