import { AtaqueFisico, MagiaAtaque } from "./habilidades";
import { MagiaCura } from "./habilidades";
import { MagiaFortalecimento } from "./habilidades";
import { Cacador } from "./cacador";
import { Monstro } from "./monstro";

const cacador1 = new Cacador('Raye', 4, 150, 15, 15, 25)
const cacador2 = new Cacador('Roze', 4, 150, 20, 15, 20)

const monstro1 = new Monstro('Colossus', 8, 260, 20, 26, 28)
const monstro2 = new Monstro('Fluffal Wolf', 6, 150, 15, 20, 22)
const monstro3 = new Monstro('Umastryx', 7, 270, 25, 20, 18)

const habilidade1 = new AtaqueFisico ('Cross Scissors','Ataque Cortante em forma de tesoura utilizando lâminas de metal', 2, 20)
const habilidade2 = new AtaqueFisico ('Widow Anchor','Ataque em forma de garras que causa grande dano ao alvo', 3, 35)
const habilidade3 = new MagiaAtaque ('Afterburnes','Ataque de explosão que destrói tudo nas proximidades', 3, 50)
const habilidade4 = new MagiaAtaque ('Jamming Waves','Ataque em forma de onde de raios', 2, 18)
const habilidade5 = new MagiaCura ('Ace Kaina','Armadura Mágica que cura o usuário', 4, 10)
const habilidade6 = new MagiaFortalecimento ('Ace Kagari','Armadura mágica que fortalece o poder de ataque do usuário', 4, 10, 'forca')
const habilidade7 = new MagiaFortalecimento ('Ace Shizuko','Armadura mágica que fortalece a resistência do usuário', 4, 10, 'resistencia')
const habilidade8 = new MagiaFortalecimento ('Ace Hayate','Armadura mágica que aumenta a velocidade do usuário', 4, 15, 'velocidade')