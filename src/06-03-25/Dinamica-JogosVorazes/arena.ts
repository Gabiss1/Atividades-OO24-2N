import { Monster } from "./tributos";
import { Tributes } from "./tributos";
import { Skills } from "./tributos";
import { Districts } from "./distrito";
import { Organizer } from "./organizador";
import { Disaster } from "./organizador";

const distrito1 = new Districts()
distrito1.setAtributes('Distrito 1',['Jóias'], 3125)

const distrito2 = new Districts()
distrito2.setAtributes('Distrito 2',['Pedreiras'], 7347)

const distrito3 = new Districts()
distrito3.setAtributes('Distrito 3',['Tecnologia'], 8030)

const distrito4 = new Districts()
distrito4.setAtributes('Distrito 4',['Pesca'], 45202)

const distrito5 = new Districts()
distrito5.setAtributes('Distrito 5',['Energia'], 84159)

const distrito6 = new Districts()
distrito6.setAtributes('Distrito 6',['Transporte'], 98329)

const distrito7 = new Districts()
distrito7.setAtributes('Distrito 7',['Madeira'], 132890)

const distrito8 = new Districts()
distrito8.setAtributes('Distrito 8',['Industria têxtil'], 142329)

const distrito9 = new Districts()
distrito9.setAtributes('Distrito 9',['Cereal'], 263928)

const distrito10 = new Districts()
distrito10.setAtributes('Distrito 10',['Engenharia'], 387329)

const distrito11 = new Districts()
distrito11.setAtributes('Distrito 11',['Agricultura'], 689029)

const distrito12 = new Districts()
distrito12.setAtributes('Distrito 12',['Mineração'], 926021)

const distrito13 = new Districts()
distrito13.setAtributes('Distrito 13',['Armas'], 853927)

const tribute1 = new Tributes()
tribute1.setAtributes('Kennen', 120, distrito1, 'Nada')
const tribute2 = new Tributes()
tribute2.setAtributes('Katarina', 80, distrito2, 'Nada')

const disaster1 = new Disaster()
disaster1.setNameDisaster('Terremoto')
disaster1.setDamageDisaster(100)

const earthquake = new Disaster()
earthquake.setDamageDisaster(100)
earthquake.setNameDisaster('Earthquake')

const armaggedon = new Disaster()
armaggedon.setDamageDisaster(100)
armaggedon.setNameDisaster('Armaggedon')

const acidRain = new Disaster()
acidRain.setDamageDisaster(100)
acidRain.setNameDisaster('Acid Rain')

const thunderstorm = new Disaster()
thunderstorm.setDamageDisaster(100)
thunderstorm.setNameDisaster('Thunderstorm')

const Snow = new Organizer
Snow.setNameOrganizer('Coriolanus Snow')
Snow.setDistrict([distrito1])
Snow.setDisaster([earthquake, armaggedon, thunderstorm, acidRain])

const skill1 = new Skills()
const skill2 = new Skills()
const skill3 = new Skills()
const skill4 = new Skills()
const skill5 = new Skills()
const skill6 = new Skills()
const skill7 = new Skills()
const skill8 = new Skills()
const skill9 = new Skills()
const skill10 = new Skills()

skill1.setAtributes('Choque', 'Dispara um raio.', 'Paralisia', 25)
skill2.setAtributes('Teleporte', 'Teletransporta para outro local.', 'Teletransporte', 0)
skill3.setAtributes('Turbilhão Cortante', 'Cria um campo de energia que gera multiplos raios.', 'Paralisia', 110)
skill4.setAtributes('Chuva Icathiana', 'Lança vários projéteis no alvo.', 'Nenhum', 30)
skill5.setAtributes('Barragem Incendiária', 'Dispara um pulso de chamas.', 'Queimadura', 60)
skill6.setAtributes('Refúgio da Ovelha', 'Prende o usuário e o alvo em uma arena onde o alvo não pode causar dano ao usuário.', 'Imunidade', 5)
skill7.setAtributes('Garra Fantasma', 'Ataca o alvo com um corte invisível.', 'Nenhum', 20)
skill8.setAtributes('Hidro-Canhão', 'Cria um grande jato de água', 'Nenhum', 85)
skill9.setAtributes('Raio Solar', 'Carrega e dispara um raio de energia solar.', 'Queimadura', 100)
skill10.setAtributes('Queimar', 'Queima o alvo.', 'Queimadura', 25)

const monster1 = new Monster()
monster1.setAtributes('Beholder', 180, 70)
monster1.setSkill(skill6)

tribute1.setSkills(skill1)
tribute1.setSkills(skill3)
tribute2.setSkills(skill1)

tribute1.getSkills()
tribute1.getTribute()