// Criar as classes para: Distrito (com atributos como nome, recursos[], populacao), Tributo
// (com atributos como nome, saude, distrito, segredo, habilidades[]) e Organizador (com
// atributos (nome e distritos[]) e métodos como liberarAnimais(), criarDesastre()).
// Aplicar Visibilidade dos atributos e métodos :
// Implementação de métodos:
// Tributos coletam recursos do distrito (se permitido). Organizador liberando animais na
// arena.
// DICA: Usar o console.log() para verificar o resultado da interação.
// Cada grupo criará um arquivo arena.ts instanciando os seus distritos, tributos e um
// organizador.
// Cada distrito deve ter um array de recursos.
// O organizador deve ter um array de distritos.

import { Districts } from "./distrito";
import { Tributes } from "./tributos";
import { Skills } from "./tributos";

let number:number

export class Disaster {
    private name:string
    private damage:number

    public setNameDisaster(nameDisaster:string){
        this.name = nameDisaster
    }
    public getNameDisaster():string{return this.name}

    public setDamageDisaster(damageDisaster:number){
        this.damage = damageDisaster
    }
    public getDamageDisaster():number{return this.damage}

    public causeDamage(target:Tributes):void{
        let selectedDamage:number = Math.floor(Math.random()*this.damage+this.damage/3)
        this.checkForCriticalHit(selectedDamage,target)
    }
    checkForCriticalHit(damage:number, target:Tributes):void{
        let chaceOfCrit:number = Math.floor(Math.random()*101)

        if (chaceOfCrit>=0 && chaceOfCrit<=90) {
            number = 1
        } else if(chaceOfCrit>90 && chaceOfCrit<=100){
            number = 2
        }
        switch (number) {
            case 1:
                target.takeDamage(this.damage)
                break
                
            case 2:
                let randomizerOfDamage = Math.floor(Math.random()*5+1)
                this.damage*randomizerOfDamage
                target.takeDamage(this.damage*randomizerOfDamage)
                break 

            default:
                console.log("O B L I V I O N")
                break
        }
    }
}

// ---------------------------------------- Organizador ------------------------------------------------------------

export class Organizer{

    //ATRIBUTES
    private name:string
    private district:Districts[]
    private disaster:Disaster[]

    public setNameOrganizer(nameOrganizer:string):void{
        this.name = nameOrganizer;
    }
    public getNameOrganizer():string{return this.name}
    
    public setDistrict(districtOrganizer:Districts[]):void{
        this.district = districtOrganizer
    }
    public setDisaster(disasterOrganizer:Disaster[]):void{
        this.disaster = disasterOrganizer
    }
    public getDistrict():Districts[]{return this.district}

    public presentOrganizer():void{
        console.log(` [====] {Head Gamemaker} [====]
I present to you the organizer ${this.name}, they control the district(s) ${this.district}
        `)
    }

    // METHODS
    public whoLetTheDawgsOut():void{
        console.log(`The organizer ${this.name}, has released his beasts.`)
    }



    public causeDisaster(target:Tributes):void{
        let selectedNumber:number = Math.floor(Math.random()*100+1)

        if (selectedNumber>=0 && selectedNumber<=25) {
            this.disaster[0].causeDamage(target)
        } else if(selectedNumber>25 && selectedNumber<=70){
            this.disaster[1].causeDamage(target)
        } else if(selectedNumber>70 && selectedNumber<=95){
            this.disaster[2].causeDamage(target)
        } else if(selectedNumber>95 && selectedNumber<=100){
            this.disaster[3].causeDamage(target)
        } else {
            console.log(' An unexpected rip in space and time has opened. Theres nowhere to run and nowhere to hide. ')
        }
    }
}

const distrito1 = new Districts()
distrito1.setAtributes('Distrito 1',['Jóias'], 3125)

const skill1 = new Skills()
skill1.setAtributes('Choque', 'Dispara um raio.', 'Paralisia', 25)

const tribute1 = new Tributes()
tribute1.setAtributes('Kennen', 120, distrito1, 'Nada')

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

Snow.presentOrganizer()
Snow.causeDisaster(tribute1)