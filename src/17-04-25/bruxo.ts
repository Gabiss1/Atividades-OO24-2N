import { Casa } from "./casa"
import { CriaturaMagica } from "./criaturasMagicas"
import { Efeito } from "./efeitos"
import { Feitico } from "./feiticoInterface"

export class Bruxo extends CriaturaMagica{
    private casa: string
    private varinha: string
    private habilidades: Feitico[] = []

    constructor(nome: string, vida: number, tipo: string, poder: number, defesa: number, varinha:string){
        super(nome, vida, tipo, poder, defesa)
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

    getVarinha(): string{
        return this.varinha
    }

    getCasa(): string{
        return this.casa
    }

    adquirirMagia(magia: Feitico):void{
        console.log(`Você aprendeu o feitiço ${magia.getNome()}!`)
        this.habilidades.push(magia)
    }

    usarMagia(magia: Feitico, alvo: CriaturaMagica): void{
        magia.lancarFeitico(alvo)
    }

    receberDano(dano: number): void{
        dano -= this.defesa
        this.vida -= dano
        console.log(`${this.nome} sofreu ${dano} de dano!`)
        console.log(`${this.nome} está com ${this.vida} de vida!`)
    }

    receberProtecao(defesaExtra: number): void {
        this.defesa += defesaExtra
    }

    receberEfeito(efeito: Efeito): void {
        if (efeito.getTipoEfeito() === 'Paralisar') {
            this.perderMovimento()
        } else {
            console.log('Esse efeito não consegue te atingir!')
        }
    }

    receberBonus(bonus: number, tipoBonus: string): void{
        if (tipoBonus === 'Poder') {
            this.poder += bonus
        } else if (tipoBonus === 'Defesa') {
            this.defesa += bonus
        } else if (tipoBonus === 'Vida') {
            this.vida += bonus
        }
    }

    chapeuSeletor(casas: Casa[]):void{
        let numAleatorio = Math.floor(Math.random()*casas.length)
        this.setCasa(casas[numAleatorio].getNome())
    }

    perderMovimento(): void{
        console.log(`${this.nome} não pode agir!`)
    }
}