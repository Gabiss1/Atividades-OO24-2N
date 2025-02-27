// Varinha

export class Varinha {
    private madeira:string
    private nucleo:string
    private tamanho:number

    setAtributos(madeira:string, nucleo:string, tamanho:number):void{
        this.madeira = madeira
        this.nucleo = nucleo
        this.tamanho = tamanho
    }

    getMadeira():void{
        console.log(this.madeira)
    }

    getNucleo():void{
        console.log(this.nucleo)
    }

    getTamanho():void{
        console.log(this.tamanho)
    }

    exibirDetalhes():void{
        console.log(`Esta varinha é feita de madeira de ${this.madeira}, tem um núcleo de ${this.nucleo} e o tamanho de ${this.tamanho} centímetros.`)
    }
}

const novaVarinha = new Varinha()
novaVarinha.setAtributos('Cereijeira', 'Pena de Fênix', 15)
novaVarinha.exibirDetalhes()

// Chapéu seletor

export class ChapeuSeletor{
    private casa:string

    selecionarCasa():void{
        let numero:number = Math.floor(Math.random()*4+1)

        if (numero === 1) {
            this.casa = 'Grifinória'
        } else   if (numero === 2) {
            this.casa = 'Sonserina'
        } else   if (numero === 3) {
            this.casa = 'Corvinal'
        } else   if (numero === 4) {
            this.casa = 'Lufa-Lufa'
        } else {
            console.log('Deu erro')
        }
    }

    exibirCasa():void{
        console.log(`Este aluno é da casa de ${this.casa}!`)
    }
}

const novoAluno = new ChapeuSeletor()
novoAluno.selecionarCasa()
novoAluno.exibirCasa()

// Feitiços

export class Feiticos{
    private nome:string
    private tipo:string
    private poder:number

    setAtributos(nome:string, tipo:string, poder:number):void{
        this.nome = nome
        this.tipo = tipo
        this.poder = poder
    }

    getNome():void{
        console.log(this.nome)
    }

    getTipo():void{
        console.log(this.tipo)
    }

    getPoder():void{
        console.log(this.poder)
    }

    exibirFeitico():void{
        console.log(`
Nome do Feitiço: ${this.nome}.
Tipo de Feitiço: ${this.tipo}.
Poder do Feitiço: ${this.poder}`)
    }

    lancarFeitico():void{

        if (this.tipo === 'Defesa') {
            let defesaFeitico = Math.floor(Math.random()*(this.poder-15)+15)
            console.log(`O feitico ${this.nome} do tipo ${this.tipo} foi lançado! O dano causado a você será reduzido em ${defesaFeitico} pontos.`)
        } else if (this.tipo === 'Cura') {
            let curaFeitico = Math.floor(Math.random()*(this.poder-15)+15)
            console.log(`O feitico ${this.nome} do tipo ${this.tipo} foi lançado! A cura gerada foi de ${curaFeitico} pontos`)
        } else if (this.tipo === 'Ataque') {
            let danoFeitico = Math.floor(Math.random()*(this.poder-10)+10)
            console.log(`O feitico ${this.nome} do tipo ${this.tipo} foi lançado! O dano causado foi de ${danoFeitico} pontos`)
        }
        
    }
}

const novoFeitico = new Feiticos()
const novoFeitico1 = new Feiticos()
const novoFeitico2 = new Feiticos()
const novoFeitico3 = new Feiticos()
const novoFeitico4 = new Feiticos()

novoFeitico.setAtributos('Expecto Patronum', 'Defesa', 60)
novoFeitico1.setAtributos('Expelliarmus', 'Ataque', 25)
novoFeitico2.setAtributos('Protego', 'Defesa', 30)
novoFeitico3.setAtributos('Cruciatus', 'Ataque', 45)
novoFeitico4.setAtributos('Fogo Maldito', 'Ataque', 95)

novoFeitico.lancarFeitico()
novoFeitico1.lancarFeitico()
novoFeitico2.lancarFeitico()
novoFeitico3.lancarFeitico()
novoFeitico4.lancarFeitico()

novoFeitico.exibirFeitico()
novoFeitico1.exibirFeitico()
novoFeitico2.exibirFeitico()
novoFeitico3.exibirFeitico()
novoFeitico4.exibirFeitico()