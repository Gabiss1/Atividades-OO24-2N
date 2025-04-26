import { Feitico } from "./feiticoInterface";
import { FeiticoAtaque } from "./feiticos";
import { FeiticoDefesa } from "./feiticos";
import { FeiticoCura } from "./feiticos";
import { LugarMagico } from "./lugarersMagicos";
import { Bruxo } from "./bruxo";
import { Cerberus, FantasmaDaCorvinal } from "./guardiao";
import { Basilisco } from "./guardiao";
import { Fenix } from "./subCriaturas";
import { Casa } from "./casa";
import { Efeito } from "./efeitos";
import { ObjetoMagico, ObjetoMundano } from "./objetos";
import { hogwartsLegacy } from "./menus";
import { Diretor } from "./grimorio";

let escolha: boolean = true
export const rl = require('readline-sync')

let paralisia = new Efeito('Paralisia', 'Paralisar')
let destravar = new Efeito('Destravar Porta', 'Abrir')
let encontrar = new Efeito('Encontrar Objetos', 'Encontrar')

let porta = new ObjetoMundano('Porta', 'Bloqueia seu caminho')
let tiaraMagica = new ObjetoMagico('Diadema de Rowena', 'Tiara do Fantasma da Corvinal', 'Poder', 15)
let pomoDeOuro = new ObjetoMagico('Pomo de Ouro', 'Tomo de ouro usado no quadribol', 'Vida', 5)
let diario = new ObjetoMagico('Diário de Tom Riddle', 'Uma das Horcruxes de Voldemort', 'Defesa', 10)

let cruciatos = new FeiticoAtaque('Crucio', 70, 'causa o recipiente deste feitico a sentir uma dor tremenda sem danificar sua forma fisica.');
let avadaKedavra = new FeiticoAtaque('Avada Kedavra', 1000, 'Maldição da Morte')
let fogoMaldito = new FeiticoAtaque('Fogo Maldito', 380, 'Invoca uma chama poderosa, quase imparável')
let expeliarmus = new FeiticoAtaque('Expeliarmus', 95, 'Raio mágico que atinge o inimigo fazendo-o perder sua varinha')
let incendio = new FeiticoAtaque('Incendio', 35, 'Coloca fogo no alvo')
let sectumsempra = new FeiticoAtaque('Sectumsempra', 125, 'Realiza vários cortes no alvo')
let protego = new FeiticoDefesa('Protego', 30, 'magia defensiva que conjura um escudo invisivel repelindo encantamentos fisicos.')
let expectoPatronum = new FeiticoDefesa('Expecto Patronum', 70, 'Invoca seu próprio patrono para lhe auxiliar')
let accio = new FeiticoDefesa('Accio', encontrar, 'Encontra objetos')
let estupefaca = new FeiticoDefesa('Estupefaca', paralisia, 'Raio que deixa o oponente estupefato')
let immobulus = new FeiticoDefesa('Immobulus', paralisia, 'Deixa o alvo congelado')
let alohomora = new FeiticoDefesa('Alohomora', destravar, 'Destrava as Portas')
let renascerDasCinzas = new FeiticoCura('Renascer das Cinzas', 50, 'Poder especial das Fênix que as permite queimar a si mesmas e depois renscer de suas cinzas.')

let salaoPrincipal = new LugarMagico('Salão principal', 1, 'N/A', [porta, porta, porta, pomoDeOuro])
let florestaProibida = new LugarMagico('Floresta proibida', 1, 'por ser uma área restrita há grande potencial de perigo, com seu maior destaque sendo a variedade de criaturas mágicas.', [diario])
let torreDaCorvinal = new LugarMagico('Torre da Corvinal', 1, 'N/A', [tiaraMagica])

let fofo = new Cerberus('Fofo', 600, 'Fera', 350, 250, cruciatos)
let basilisco = new Basilisco('Basilisk', 510, 'Cobra', 270, 250, protego)
let helena = new FantasmaDaCorvinal('Dama Cinzenta', 380, 'Fantasma', 180, 230, protego)

let fawks = new Fenix('Fawks', 250, 'Fênix', 175, 50, renascerDasCinzas)

let dumbledore = new Diretor('Dumbledore', [expeliarmus , protego, incendio, sectumsempra, expectoPatronum, estupefaca, immobulus, alohomora, accio, cruciatos, avadaKedavra, fogoMaldito])

let grifinoria = new Casa('Grifinória', fawks)
let sonserina = new Casa('Sonserina', basilisco)
let corvinal = new Casa('Corvinal', helena)
let lufaLufa = new Casa('Lufa-Lufa', fofo)

const casasHogwarts = [grifinoria, sonserina, corvinal, lufaLufa]

export function cadastroBruxo() {
    let nome = rl.question('Digite seu nome de Bruxo: ')

    let madeira: string
    let nucleo: string
    while(escolha === true){
        console.log(
        `
        ===== Tipos de Madeira de Varinha ====
        1 - Carvalho.
        2 - Cereijeira.
        3 - Macieira.
        4 - Pinheiro.
        `
        )
        let opcao = rl.questionInt('Escolha uma opcao: ');
        
        switch (opcao) {
            case 1:
                madeira = 'Carvalho'
                escolha = false
            break;
            case 2:
                madeira = 'Cereijeira'
                escolha = false
            break;
            case 3:
                madeira = 'Macieira'
                escolha = false
            break;
            case 4:
                madeira = 'Pinheiro'
                escolha = false
            break;
            default:
                console.log('Opcao Invalida')
                break;
        }
        rl.question('Pressione ENTER para continuar...')
        }

    escolha = true

    while(escolha === true){
        console.log(
        `
        ===== Tipos de Nucleos de Varinha ====
        1 - Pena de Fenix.
        2 - Fibra de Coracao de Dragao.
        3 - Pelo de Unicorio.
        4 - Pena de Passaro do Trovao.
        `
        )
        let opcao = rl.questionInt('Escolha uma opcao: ');
        
        switch (opcao) {
            case 1:
                nucleo = 'Pena de Fênix'
                escolha = false
            break;
            case 2:
                nucleo = 'Fibra de Coração de Dragão'
                escolha = false
            break;
            case 3:
                nucleo = 'Pelo de Unicórnio'
                escolha = false
            break;
            case 4:
                nucleo = 'Pena de Pássaro do Trovão'
                escolha = false
            break;
            default:
                console.log('Opcao Invalida')
                break;
        }
        rl.question('Pressione ENTER para continuar...')
        }
    escolha = true

    const varinhaProtagonista = 'Varinha de '+madeira+' com Núcleo de '+nucleo
    let vidaProtagonista = Math.floor((Math.random()*50)+100)
    let poderProtagonista = Math.floor((Math.random()*25)+50)
    let defesaProtagonista = Math.floor((Math.random()*15)+10)

    if (nucleo === 'Pena de Fênix') {
        poderProtagonista += 15
        vidaProtagonista += 5
    } else if (nucleo === 'Fibra de Coração de Dragão') {
        poderProtagonista += 15
        defesaProtagonista += 5
    } else if (nucleo === 'Pelo de Unicórnio') {
        vidaProtagonista += 20
        defesaProtagonista += 10
    } else if (nucleo === 'Pena de Pássaro do Trovão') {
        poderProtagonista += 5
    }

    const bruxoProtagonista = new Bruxo(nome, vidaProtagonista, 'Bruxo', poderProtagonista, defesaProtagonista, varinhaProtagonista)
    bruxoProtagonista.chapeuSeletor(casasHogwarts)  

    hogwartsLegacy(bruxoProtagonista)
}

export function explorarEscola(bruxoProtagonista: Bruxo){
    const lugares = [florestaProibida, salaoPrincipal, torreDaCorvinal]
    let localEscolhido = Math.floor(Math.random()*lugares.length)

    lugares[localEscolhido].getDesafios()
    lugares[localEscolhido].iniciarDesafio()

}

export function consultarDiretor(){
    const nomeFeitico = rl.question('Digite o nome de um Feitico: ')
    dumbledore.consultarFeitico(nomeFeitico)
}

export function aprenderMagia(bruxoProtagonista: Bruxo){
    const magiasDisponiveis = [expeliarmus , protego, incendio, sectumsempra, expectoPatronum, estupefaca, immobulus, alohomora, accio]
    const magiasEspeciais = [cruciatos, avadaKedavra, fogoMaldito]

    let chanceDeEncontrar = Math.floor(Math.random()*100)

    if (chanceDeEncontrar === 0) {
        let magiaAprendida = Math.floor(Math.random()*magiasDisponiveis.length)
        bruxoProtagonista.adquirirMagia(magiasDisponiveis[magiaAprendida])
    } else {
        let magiaAprendida = Math.floor(Math.random()*magiasEspeciais.length)
        bruxoProtagonista.adquirirMagia(magiasEspeciais[magiaAprendida])
    }
}

export function participarTorneio(bruxoProtagonista: Bruxo){

}

export function procurarItem(itensMagicos: ObjetoMagico[], bruxoProtagonista: Bruxo) {
    let chanceDeEncontrar = Math.floor(Math.random()*10)

    if (chanceDeEncontrar === 0) {
        let itemEncontrado = Math.floor(Math.random()*itensMagicos.length)
        itensMagicos[itemEncontrado].fornecerBonus(bruxoProtagonista)
    } else {
        console.log('Item não encontrado!')
    }
}