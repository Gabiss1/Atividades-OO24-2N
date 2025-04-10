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

    usarHabilidade(alvo: Monstro):void{
        this.habilidadeEquipada[0].usarHabilidade(this.nome, alvo)
        console.log(`A Habilidade ${this.habilidadeEquipada[0].nome} foi utilizada, ${this.nome} não possui mais habilidades equipadas.`)
        this.habilidadeEquipada.pop
    }

    receberDano(dano:number):void{
        this.vida -= dano
        console.log(`${this.nome} está com ${this.vida} de vida`)
        this.verificarStatus()
    }

    receberCura():void{

    }

    verificarStatus():void{

    }

    alterarStatus():void{

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