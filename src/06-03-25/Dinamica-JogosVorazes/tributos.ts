import { Districts } from "./distrito";

export class Monster{
    monsterName:string
    monsterHealth:number
    monsterStrength:number
    monsterSkill: Skills

    setAtributes(name:string, health:number, strength:number):void{
        this.monsterName = name
        this.monsterHealth = health
        this.monsterStrength = strength
    }

    setSkill(skills:Skills):void{
        this.monsterSkill = skills
    }

    useSkill(usedSkill:number, target:Tributes):void{
        this.monsterSkill[usedSkill].useSkill(target)
    }

    useAttack():void{
        const passiveDamage = Math.floor(Math.random()*(this.monsterStrength-30)+15)
    }

    getMonster():void{
        console.log(`
            Nome: ${this.monsterName}
            Vida: ${this.monsterHealth}
            Força: ${this.monsterStrength}`)
    }

    getName():string{
        return this.monsterName
    }

    getHealth():number{
        return this.monsterHealth
    }

    getStrength():number{
        return this.monsterStrength
    }
}

export class Skills{
    private skillName:string
    private skillDescription:string
    private skillEffect:string
    private skillDamage:number

    setAtributes(name:string, description:string, effect:string, damage:number):void{
        this.skillName = name
        this.skillDescription = description
        this.skillEffect = effect
        this.skillDamage = damage
    }

    useSkill(skillTarget:Tributes):void{
        skillTarget.calculeDamageResist(this.skillDamage)
    }

    getSkill():void{
        console.log(`
            Nome da Habilidade: ${this.skillName}.
            Descrição: ${this.skillDescription}
            Effeito Adicional: ${this.skillEffect}.
            Dano: ${this.skillDamage}.`)
    }

    getName():string{
        return this.skillName
    }

    getDescription():string{
        return this.skillDescription
    }

    getEffect():string{
        return this.skillEffect
    }

    getDamage():number{
        return this.skillDamage
    }
}

export class Tributes{
    public name:string
    private health:number
    private armor:number
    private resistence:number
    public district:Districts
    private secrets:string
    private skill:Array<Skills> = []

    setAtributes(name:string, health:number, armor:number, resistence:number, district:Districts, secret:string):void{
        this.name = name
        this.health = health
        this.armor = armor
        this.resistence = resistence
        this.district = district
        this.secrets = secret
    }

    setSkills(skills:Skills):void{
        this.skill.push(skills)
    }

    useSkill(usedSkill:number, target:Tributes):void{
        this.skill[usedSkill].useSkill(target)
    }

    getTribute():void{
        console.log(`
            Nome: ${this.name}.
            Vida: ${this.health}.
            Distrito: ${this.district}.
            Segredo: ${this.secrets}.`)
            for (let i = 0; i < this.skill.length; i++) {
                console.log(
            `            Habilidade ${i+1}: ${this.skill[i].getName()}`)
            }
    }

    getName():string{
        return this.name
    }

    getHealth():number{
        return this.health
    }

    getDistrict():Districts{
        return this.district
    }

    getSecret():string{
        return this.secrets
    }

    getSkills():void{
        for (let i = 0; i < this.skill.length; i++) {
            this.skill[i].getSkill()
        }
    }

    calculeDamageResist(damage:number):void{
        let resistencePercentage = this.resistence/100
        damage -= this.armor
        damage*=resistencePercentage
        console.log(damage)
        this.takeDamage(damage)
    }

    takeDamage(damage:number):void{
        this.health = Math.floor(this.health -= damage)
        console.log(this.health)
        if (this.health <= 0) {
            console.log(`O Tributo ${this.name} foi morto.`)
        } else if (damage < this.health*2) {
            console.log(`O Tributo ${this.name} está machucado.`)
        } else if (damage < this.health*4) {
            console.log(`O Tributo ${this.name} está gravemente ferido.`)
        }  else {
            console.log(`O Tributo ${this.name} recebeu dano.`)
        }
    }

    collectResource():void{
        console.log(`O tributo ${this.name} encontrou ${this.district.getResources()}.`)
    }
}

const distrito1 = new Districts()
distrito1.setAtributes('Distrito 1',['Jóias'], 3125)

const tribute1 = new Tributes()
tribute1.setAtributes('Kennen', 120,35, 10, distrito1, 'Nada')
const tribute2 = new Tributes()
tribute2.setAtributes('Katarina', 80, 20, 8, distrito1, 'Nada')

const skill1 = new Skills()
skill1.setAtributes('Choque', 'Dispara um raio.', 'Paralisia', 25)

tribute1.setSkills(skill1)
tribute2.setSkills(skill1)

tribute1.collectResource()
tribute1.useSkill(0, tribute2)