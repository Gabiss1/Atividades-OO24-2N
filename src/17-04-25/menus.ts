import { Bruxo } from "./bruxo"
import { explorarEscola } from "./main"
import { aprenderMagia } from "./main"
import { cadastroBruxo } from "./main"
import { participarTorneio } from "./main"

let estado:boolean = true

export function hogwartsLegacy() {

    while(estado === true){
        console.clear()
        console.log(
        `
        ===== Aventura Mágica e Hogwarts ====
        1 - Explorar
        2 - Aprender Magia
        3 - Participar do Torneio Tribuxo
        4 - Encerrar Aventura
        `
        )
        let opcao = rl.questionInt('Escolha uma opcao: ');
        
        switch (opcao) {
            case 1:
                explorarEscola()
            break;
            case 2:
                aprenderMagia()
            break;
            case 3:
                participarTorneio()
            break;
            case 4:
                console.log('Finalizando o Programa...')
                estado = false
                break;
            default:
                console.log('Opcao Invalida')
                break;
        }
        rl.question('Pressione ENTER para continuar...')
        }
}

export function menuInicial(){

while(estado === true){
    console.clear()
    console.log(
    `
    =====SISTEMA DE CADASTRO DE BRUXO====
    1 - Cadastrar bruxo
    2 - Sair
    `
    )
    let opcao = rl.questionInt('Escolha uma opcao: ');
    
    switch (opcao) {
        case 1:
            cadastroBruxo()
            hogwartsLegacy()
        break;
        case 2:
            console.log('Finalizando o Programa...')
            estado = false
            break;
        default:
            console.log('Opcao Invalida')
            break;
    }
    rl.question('Pressione ENTER para continuar...')
    }
}