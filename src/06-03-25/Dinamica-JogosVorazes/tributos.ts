export class Monster{
    monsterName:string
    monsterHealth:number
    monsterStrength:number
    monsterSkill: Skills
    
    // {
    //     name:string,
    //     damage:number,
    //     effect:string
    // }

    setAtributes(name:string, health:number, strength:number):void{
        this.monsterName = name
        this.monsterHealth = health
        this.monsterStrength = strength
    }

    // setSkill(name:string, damage:number, effect:string):void{
    //     this.monsterSKill.name = name
    //     this.monsterSKill.damage = damage
    //     this.monsterSKill.effect = effect
    // }

    setSkill(skills:Skills):void{
        this.monsterSkill = skills
    }

    useSkill(usedSkill:number, target:Tributes):void{
        this.monsterSkill[usedSkill].useSkill(target)
    }

    getMonster():void{
        console.log(`
            Nome: ${this.monsterName}
            Vida: ${this.monsterHealth}
            Força: ${this.monsterStrength}`)

            // Nome da Habilidade: ${this.monsterSKill.name}.
            // Efeito Adicional: ${this.monsterSKill.effect}.
            // Dano: ${this.monsterSKill.damage}.
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

class Districts{}

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
        skillTarget.takeDamage(this.skillDamage)
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
    public district:Districts
    private secrets:string
    private skill:Array<Skills> = []

    setAtributes(name:string, health:number, district:Districts, secret:string):void{
        this.name = name
        this.health = health
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

    takeDamage(damage:number):void{
        this.health -= damage
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

    collectResource
}

const district1 = new Districts()

const tribute1 = new Tributes()
tribute1.setAtributes('Kennen', 120, district1, 'Nada')

const tribute2 = new Tributes()
tribute2.setAtributes('Katarina', 80, district1, 'Nada')

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


tribute1.setSkills(skill1)
tribute1.setSkills(skill3)
tribute2.setSkills(skill1)

tribute1.getSkills()
tribute1.getTribute()

// tribute1.useSkill(0, tribute2)
// tribute1.useSkill(0, tribute2)