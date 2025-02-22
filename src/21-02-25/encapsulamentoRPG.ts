export class Guerreiro{
    public nome:string;
    private tipo:string;
    private forca:number;
    private poderMagico:number;

    constructor(nome:string){
        this.nome = nome
    }

    setAtributos(tipo:string, forca:number, poderMagico:number):void{
        this.tipo = tipo
        this.forca = forca
        this.poderMagico = poderMagico
    }

    // constructor(tipo:string, forca:number, poderMagico:number){
    //     this.nome= nome,
    //     this.tipo = tipo,
    //     this.forca = forca,
    //     this.poderMagico = poderMagico
    // }
    ataque():void{
        let danoAtaque = Math.floor(Math.random()*this.forca)
        console.log(`Seu ataque causou ${danoAtaque} de dano`)
    }
    ataqueMagico():void{
        let danoAtaque = Math.floor(Math.random()*this.poderMagico*2)
        console.log(`Sua Magia causou ${danoAtaque} de dano Mágico`)
    }
    saude:number = 100
}

export class Mago{
    nome:string;
    tipo:string;
    forca:number;
    poderMagico:number;
    constructor(nome:string, tipo:string, forca:number, poderMagico:number){
        this.nome= nome,
        this.tipo = tipo,
        this.forca = forca,
        this.poderMagico = poderMagico
    }
    ataque():void{
        let danoAtaque = Math.floor(Math.random()*this.forca)
        console.log(`Seu ataque causou ${danoAtaque} de dano`)
    }
    ataqueMagico():void{
        let danoAtaque = Math.floor(Math.random()*this.poderMagico*2)
        console.log(`Sua Magia causou ${danoAtaque} de dano Mágico`)
    }
    saude:number = 20
    
}

export class Atirador{
    nome:string;
    tipo:string;
    forca:number;
    poderMagico:number;
    constructor(nome:string, tipo:string, forca:number, poderMagico:number){
        this.nome= nome,
        this.tipo = tipo,
        this.forca = forca,
        this.poderMagico = poderMagico
    }
    ataque():void{
        let danoAtaque = Math.floor(Math.random()*this.forca)
        console.log(`Seu ataque causou ${danoAtaque} de dano`)
    }
    ataqueMagico():void{
        let danoAtaque = Math.floor(Math.random()*this.poderMagico*2)
        console.log(`Sua Magia causou ${danoAtaque} de dano Mágico`)
    }
    saude:number = 50
}

export class Clerigo{
    nome:string;
    tipo:string;
    forca:number;
    poderMagico:number;
    constructor(nome:string, tipo:string, forca:number, poderMagico:number){
        this.nome= nome,
        this.tipo = tipo,
        this.forca = forca,
        this.poderMagico = poderMagico
    }
    ataque():void{
        let danoAtaque = Math.floor(Math.random()*this.forca)
        console.log(`Seu ataque causou ${danoAtaque} de dano`)
    }
    ataqueMagico():void{
        let danoAtaque = Math.floor(Math.random()*this.poderMagico*2)
        console.log(`Sua Magia causou ${danoAtaque} de dano Mágico`)
    }
    saude:number = 40
}

export class Monstro{
    nome:string;
    forca:number = 50;
    saude:number = 10
    constructor(nome:string){
        this.nome= nome
    }

    ataque():void{
        let danoAtaque = Math.floor(Math.random()*this.forca)
        console.log(`O ataque do monstro causou ${danoAtaque}`)
    }
}


const guerreiro1 = new Guerreiro('Phanteon')
guerreiro1.setAtributos('Lutador', 58, 10)


