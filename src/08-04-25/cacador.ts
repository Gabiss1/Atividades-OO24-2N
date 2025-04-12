import { habilidadeProtagonista } from "./habilidades"
import { Habilidade } from "./interfaceHabilidades"
import { Monstro } from "./monstro"

export class Cacador {
    private nome: string
    private nivel: number
    private vida: number
    private resistencia: number
    private forca: number
    private velocidade: number
    private habilidades: Habilidade[] = []
    private habilidadeEquipada: Habilidade[] = []
    private habilidadeEspecial: habilidadeProtagonista[] = []

    constructor(nome: string, nivel: number, vida: number, resistencia: number, forca: number, velocidade: number){
        this.nome = nome
        this.nivel = nivel
        this.vida = vida 
        this.resistencia = resistencia
        this.forca = forca
        this.velocidade = velocidade
    }

    setHabilidade(habilidade: Habilidade):void{
        this.habilidades.push(habilidade)
    }

    setHabilidadeEspecial(habilidade: habilidadeProtagonista):void{
        this.habilidadeEspecial.push(habilidade)
    }

    getNome():string{
        return this.nome
    }

    getVida():number{
        return this.vida
    }

    getHabilidadeEspecial():habilidadeProtagonista[]{
        return this.habilidadeEspecial
    }

    getQuantidadeHabilidades():number{
        return this.habilidades.length
    }

    getResistencia():number{
        return this.resistencia
    }

    getForca():number{
        return this.forca
    }

    getVelocidade():number{
        return this.velocidade
    }

    getHabilidadeEquipada():Habilidade{
        return this.habilidadeEquipada[0]
    }

    equiparHabilidade(posicaoHabilidade: number){
        let habilidadeEscolhida = this.habilidades[posicaoHabilidade]
        this.habilidadeEquipada.push(habilidadeEscolhida)
    
    if (this.habilidadeEquipada.length === 0) {
        console.log(`${this.nome} não possui a habilidade ${habilidadeEscolhida.nome}. Nenhuma habilidade foi equipada.`)
    }
    }

    usarHabilidade(alvo: Monstro | Cacador):void{
        this.habilidadeEquipada[0].usarHabilidade(this.nome, alvo)
        console.log(`A Habilidade ${this.habilidadeEquipada[0].nome} foi utilizada, ${this.nome} não possui mais habilidades equipadas.`)
        this.habilidadeEquipada.pop()
    }

    receberDano(dano:number):void{
        dano -= this.resistencia
        if (dano > 0) {
            this.vida -= dano
        if (this.vida > 0) {
            console.log(`${this.nome} está com ${this.vida} de vida`)
        } else if(this.vida <= 0){
            console.log(`${this.nome} está com 0 de vida`)
        }
        } else {
            console.log(`${this.nome} não sofreu dano.`)
        }
        
    }

    receberCura(cura:number):void{
        this.vida += cura
        console.log(`${this.nome} está com ${this.vida} de vida`)
    }

    aumentarResistencia(valor:number):void{
        this.resistencia += valor
        console.log(`${this.nome} teve sua resistência aumentada para ${this.resistencia} pontos!`)
    }

    aumentarForca(valor:number):void{
        this.forca += valor
        console.log(`${this.nome} teve sua força aumentada para ${this.forca} pontos!`)
    }

    aumentarVelocidade(valor:number):void{
        this.velocidade += valor
        console.log(`${this.nome} teve sua velocidade aumentada para ${this.velocidade} pontos!`)
    }

    listarHabilidade():void{

        for (let i = 0; i < this.habilidades.length; i++) {
            console.log(`${i+1} - ${this.habilidades[i].nome}.`)
        }
    }

    exibirCacador():void{
        console.log(` Nome: ${this.nome}.\n Nível: ${this.nivel}.\n Resistência: ${this.resistencia}.\n Força: ${this.forca}.\n Velocidade: ${this.velocidade}.\n Habilidades:\n${this.listarHabilidade()}`)
    }
}