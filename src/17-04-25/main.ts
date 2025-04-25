import { Feitico } from "./feiticoInterface";
import { FeiticoAtaque } from "./feiticos";
import { FeiticoDefesa } from "./feiticos";
import { FeiticoCura } from "./feiticos";
import { FeiticoSuporte } from "./feiticos";
import { LugarMagico } from "./lugarersMagicos";
import { Bruxo } from "./bruxo";
import { Cerberus, FantasmaDaCorvinal } from "./guardiao";
import { Basilisco } from "./guardiao";
import { Fenix } from "./subCriaturas";

let escolha: boolean = true
export const rl = require('readline-sync')

let cruciatosCurse = new FeiticoAtaque('Crucio', 60, 'causa o recipiente deste feitico a sentir uma dor tremenda sem danificar sua forma fisica.');
let protego = new FeiticoDefesa('Protego', 40, 'magia defensiva que conjura um escudo invisivel repelindo encantamentos fisicos.')
let renascerDasCinzas = new FeiticoCura('Renascer das Cinzas', 50, 'Poder especial das Fênix que as permite queimar a si mesmas e depois renscer de suas cinzas.')

let salaoPrincipal = new LugarMagico('Salão principal', 1, 'N/A')
let florestaProibida = new LugarMagico('Floresta proibida', 1, 'por ser uma área restrita há grande potencial de perigo, com seu maior destaque sendo a variedade de criaturas mágicas.')

let fofo = new Cerberus('Fofo', 600, 'Fera', 350, 250, cruciatosCurse)
let escamoso = new Basilisco('Basilisk', 510, 'Cobra', 270, 250, protego)
let helena = new FantasmaDaCorvinal('Dama Cinzenta', 380, 'Fantasma', 180, 230, protego)

let fawks = new Fenix('Fawks', 250, 'Fênix', 175, 50, protego)

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
    bruxoProtagonista.chapeuSeletor
}

export function explorarEscola(){
}

export function aprenderMagia(){      
}

export function participarTorneio(){
}