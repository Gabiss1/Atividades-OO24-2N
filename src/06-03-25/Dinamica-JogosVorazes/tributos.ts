class Distrito{}

export class Skills{
    private skillName:string
    private skillDescription:string
    private skillEffect:string

    setAtributes(name:string, description:string, effect:string):void{
        this.skillName = name
        this.skillDescription = description
        this.skillEffect = effect
    }

    useSkill():void{

    }
}

export class Tributos{
    public name:string
    private health:number
    public district:Distrito
    private secrets:string
    private skill:Array<Skills>

    setAtributes(name:string, health:number, district:Distrito, secret:string):void{
        this.name = name
        this.health = health
        this.district = district
        this.secrets = secret
    }

    setSkills(skills:Skills):void{
        this.skill.push(skills)
    }

    useSkill():void{
        
    }

    takeDamage(damage:number):void{
        this.health -= damage
        if (this.health === 0) {
            console.log(`O Tributo ${this.name} foi morto.`)
        } else if (this.health < this.health/4) {
            console.log(`O Tributo ${this.name} está gravemente ferido.`)
        } else if (this.health < this.health/2) {
            console.log(`O Tributo ${this.name} está machucado.`)
        } else {
            console.log(`O Tributo ${this.name} recebeu dano.`)
        }
    }
}