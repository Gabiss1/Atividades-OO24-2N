
export class LugarMagico {
    protected nome: string
    protected andares: number
    protected desafios: string

    constructor(nomeLugar: string, andarLugar: number, desafioLugar: string) {
        this.nome = nomeLugar
        this.andares = andarLugar
        this.desafios = desafioLugar
    }

    getNome(): string {
        return this.nome
    }

    getAndares(): number {
        return this.andares
    }

    getDesafios(): string {
        return this.desafios
    }
}