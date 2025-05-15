export class Pedido {
    numeroPedido: number
    nomeCliente: string
    itens: string[]
    status: "Enviado" |  "À Caminho" | "Entregue" | "Finalizado"

    constructor(numero: number, nome: string, itens: string[], status: "Enviado" | "Entregue"){
        this.numeroPedido = numero
        this.nomeCliente = nome
        this.itens = itens
        this.status = status
    }

    getItens(): void{
       for (let i = 0; i < this.itens.length; i++) {
        console.log(`${i+1} - ${this.itens[i]}.`)
       }
    }

    atualizarStatus(): void{
        switch (this.status) {
            case "Enviado":
                this.status = "À Caminho"
                break;
            case "À Caminho":
                this.status = "Entregue"
                break;
            case "Entregue":
                this.status = "Finalizado"
                break;
            default:
                this.status = "Enviado"
                break;
        }
        console.log('Status Atualizado com sucesso!')
        console.log(`Novo Status - ${this.status}`)
    }

    exibirPedido(): void{
        console.log(`Número do Pedido: ${this.numeroPedido}.\nNome Cliente: ${this.nomeCliente}.\nItens:`)
        this.getItens()
        console.log(`Status: ${this.status}.`)
    }
}