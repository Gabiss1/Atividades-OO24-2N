import { Casa } from "./casa"
import { CriaturaMagica } from "./criaturasMagicas"
import { Feitico } from "./feiticoInterface"

export class Bruxo extends CriaturaMagica{
    protected casa:string
    protected varinha:string
    protected habilidades: Feitico[] = []

    constructor(nome: string, vida: number, tipo: string, poder: number, varinha:string){
        super(nome, vida, tipo, poder)
        this.varinha = varinha
    }

    setCasa(casa: string):void{
        console.log(`Você foi selecionado para a casa de ${casa}, parabéns!!!`)
        this.casa = casa
    }

    getNome(): string {
        return this.nome
    }
    
    getTipo(): string {
        return this.tipo
    }

    getPoder(): number{
        return this.poder
    }

    getCasa(): string{
        return this.casa
    }

    adquirirMagia(magia: Feitico):void{
        console.log(`Você aprendeu o feitiço ${magia.getNome()}!`)
        this.habilidades.push(magia)
    }

    usarMagia(): void{

    }

    chapeuSeletor(casas: Casa[]):void{
        let numAleatorio = Math.floor(Math.random()*casas.length)
        this.setCasa(casas[numAleatorio].getNome())
    }
}