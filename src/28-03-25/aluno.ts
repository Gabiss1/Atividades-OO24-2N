import { Usuario } from "./usuario";

export class Aluno extends Usuario{
    private idade: number
    private peso: number
    private altura: number

    constructor(nome:string, email:string, idade:number, peso:number, altura:number){
        super(nome, email)
        this.idade = idade
        this.peso = peso
        this.altura = altura
    }

    getIdade():number{
        return this.idade
    }

    getPeso():number{
        return this.peso
    }

    getAltura():number{
        return this.altura
    }

    calcularIMC():number{
        let imc = Math.floor(this.peso/(this.altura^2))
        return imc
    }

    getAluno():string{
        return `\n${this.getUsuario()}\nIdade: ${this.idade}.\nPeso: ${this.peso}.\nAltura: ${this.altura}.\n`
    }
}