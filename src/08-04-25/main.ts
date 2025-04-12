import { AtaqueFisico } from "./habilidades";
import { MagiaAtaque } from "./habilidades";
import { MagiaCura } from "./habilidades";
import { MagiaFortalecimento } from "./habilidades";
import { Cacador } from "./cacador";
import { Monstro } from "./monstro";

const cacador1 = new Cacador('Raye', 4, 150, 15, 15, 25)
const cacador2 = new Cacador('Roze', 4, 150, 20, 15, 20)

const monstro1 = new Monstro('Colossus', 8, 260, 20, 26, 28)
const monstro2 = new Monstro('Fluffal Wolf', 6, 150, 15, 20, 22)
const monstro3 = new Monstro('Umastryx', 7, 270, 25, 20, 18)

const habilidade1 = new AtaqueFisico ('Cross Scissors','Ataque Cortante em forma de tesoura utilizando lâminas de metal', 'ataque', 20)
const habilidade2 = new AtaqueFisico ('Widow Anchor','Ataque em forma de garras que causa grande dano ao alvo', 'ataque', 35)
const habilidade3 = new MagiaAtaque ('Afterburnes','Ataque de explosão que destrói tudo nas proximidades', 'ataque', 50)
const habilidade4 = new MagiaAtaque ('Jamming Waves','Ataque em forma de onde de raios', 'ataque', 18)
const habilidade5 = new MagiaCura ('Ace Kaina','Armadura Mágica que cura o usuário', 'suporte', 10)
const habilidade6 = new MagiaFortalecimento ('Ace Kagari','Armadura mágica que fortalece o poder de ataque do usuário', 'suporte', 10, 'forca')
const habilidade7 = new MagiaFortalecimento ('Ace Shizuko','Armadura mágica que fortalece a resistência do usuário', 'suporte', 10, 'resistencia')
const habilidade8 = new MagiaFortalecimento ('Ace Hayate','Armadura mágica que aumenta a velocidade do usuário', 'suporte', 15, 'velocidade')

cacador1.setHabilidade(habilidade1)
cacador1.setHabilidade(habilidade2)
cacador1.setHabilidade(habilidade3)
cacador1.setHabilidade(habilidade5)
cacador1.setHabilidade(habilidade8)
cacador2.setHabilidade(habilidade1)
cacador2.setHabilidade(habilidade4)
cacador2.setHabilidade(habilidade6)
cacador2.setHabilidade(habilidade7)

function batalhar(cacador: Cacador, monstro: Monstro) {
    while (monstro.getVida() > 0 && cacador.getVida() > 0) {

        if (cacador.getVelocidade() > monstro.getVelocidade()) {
            let valor = Math.floor(Math.random()*cacador.getQuantidadeHabilidades())
            cacador.equiparHabilidade(valor)
            if (cacador.getHabilidadeEquipada().classe === 'ataque') {
                cacador.usarHabilidade(monstro)
            } else if (cacador.getHabilidadeEquipada().classe === 'suporte'){
                cacador.usarHabilidade(cacador)
            }

            if (monstro.getVida() > 0) {
                monstro.atacarCacador(cacador)
            }
        } else {
            monstro.atacarCacador(cacador)
            if (cacador.getVida() > 0) {
                let valor = Math.floor(Math.random()*cacador.getQuantidadeHabilidades())
                cacador.equiparHabilidade(valor)
            if (cacador.getHabilidadeEquipada().classe === 'ataque') {
                cacador.usarHabilidade(monstro)
            } else if (cacador.getHabilidadeEquipada().classe === 'suporte'){
                cacador.usarHabilidade(cacador)
            }
            }
            
        }
    }
    if (monstro.getVida() > 0) {
        console.log(`${monstro.getNome()} eliminou ${cacador.getNome()} num combate!`)
    } else if (cacador.getVida() > 0){
        console.log(`${cacador.getNome()} eliminou ${monstro.getNome()} num combate!`)
    }
}

batalhar(cacador1, monstro1)