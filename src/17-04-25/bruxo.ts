import { CriaturaMagica } from "./criaturasMagicas";
import { Feitico } from "./feiticoInterface";

export class Bruxo extends CriaturaMagica {

    constructor(nomeCriatura: string, vidaCriatura: number, tipoCriatura: string, poderCriatura: number) {
        super(nomeCriatura, vidaCriatura, tipoCriatura, poderCriatura)
    }

    usarMagia(feitico: Feitico): void{

    }

    receberDano(dano: number): void {
        
    }

    receberProtecao(protecao: number):void{

    }
}