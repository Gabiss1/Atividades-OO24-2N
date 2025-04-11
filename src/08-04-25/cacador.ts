import { Habilidade } from "./interfaceHabilidades"
import { Monstro } from "./monstro"

export class Cacador {
    nome: string
    nivel: number
    vida: number
    resistencia: number
    forca: number
    velocidade: number
    habilidades: Habilidade[]
    habilidadeEquipada: Habilidade[] = []

    constructor(nome: string, nivel: number, vida: number, resistencia: number, forca: number, velocidade: number){
        this.nome = nome
        this.nivel = nivel
        this.vida = vida 
        this.resistencia = resistencia
        this.forca = forca
        this.velocidade = velocidade
    }

    setHabilidades(habilidade: Habilidade[]):void{
        this.habilidades = habilidade
    }

    getNome():string{
        return this.nome
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

    equiparHabilidade(nomeHabilidade: string){
        for (const posicao of this.habilidades) {
            if (nomeHabilidade === posicao.nome) {
                this.habilidadeEquipada.push(posicao)
            }
    }

    if (this.habilidadeEquipada.length === 0) {
        console.log(`${this.nome} não possui a habilidade ${nomeHabilidade}. Nenhuma habilidade foi equipada.`)
    }
    }

    usarHabilidadeAtaque(alvo: Monstro, alvoSuporte: Cacador):void{
        this.habilidadeEquipada[0].usarHabilidade(this.nome, alvo)
        console.log(`A Habilidade ${this.habilidadeEquipada[0].nome} foi utilizada, ${this.nome} não possui mais habilidades equipadas.`)
        this.habilidadeEquipada.pop
    }

    receberDano(dano:number):void{
        dano -= this.resistencia
        this.vida -= dano
        console.log(`${this.nome} está com ${this.vida} de vida`)
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
        for (const posicao of this.habilidades) {
            console.log(`${this.habilidades.indexOf(posicao)+1} - ${posicao.nome}.`)
        }
    }

    exibirCacador():void{
        console.log(` Nome: ${this.nome}.\n Nível: ${this.nivel}.\n Resistência: ${this.resistencia}.\n Força: ${this.forca}.\n Velocidade: ${this.velocidade}.\n Habilidades:\n${this.listarHabilidade()}`)
    }
}