import { Usuario } from "./usuario";

export class Instrutor extends Usuario{
    private especialidade: string
    private cref: string

    constructor(nome:string, email:string, especialidade:string, cref:string){
        super(nome, email)
        this.especialidade = especialidade
        this.cref = cref
    }
}