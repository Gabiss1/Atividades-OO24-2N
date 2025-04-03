import { Usuario } from "./usuario";

export class Instrutor extends Usuario{
    private especialidade: string
    private cref: string

    constructor(nome:string, email:string, especialidade:string, cref:string){
        super(nome, email)
        this.especialidade = especialidade
        this.cref = cref
    }

    getEspecialidade():string{
        return this.especialidade
    }

    getCref():string{
        return this.cref
    }

    getInstrutor():string{
        return `\n${this.getUsuario()}\nEspecialidade: ${this.especialidade}.\nCREF: ${this.cref}.\n`
    }
}