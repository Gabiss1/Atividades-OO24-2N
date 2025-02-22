import { Cat } from "./classe";

export class User{
    private nome: string;
    private cat:Cat

    setNome(nome:string):void{
        this.nome = nome
    }
    setCat(cat:Cat):void{
        this.cat= cat
    }
    adicionarTarefa():void{
        console.log('Tarefa adicionada!')
    }
}

const eu = new User()
eu.setNome('Gabriel')
const meuGato = new Cat()
meuGato.setName('Sapato')