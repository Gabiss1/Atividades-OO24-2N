export interface Habilidade {
    nome: string
    descricao: string
    classe: number
    valorEfeito: number

    usarHabilidade():void
    calcularEfeito():void
    exibirDescricao():void
}