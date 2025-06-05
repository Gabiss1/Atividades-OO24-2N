import { Competicao } from "./competicao";
import { Node } from "./node";

export class Temporada{
    private raiz: Node<Competicao>
    private numeroTemporada: string

    constructor(raiz: Node<Competicao>, numeroTemporada: string){
        this.raiz = raiz
        this.numeroTemporada = numeroTemporada
    }

    getRaiz(): Node<Competicao>{
        return this.raiz
    }
}

export class Mundial{
    private participantes: Temporada[] = []

    addParticipante(participante: Temporada): void{
        this.participantes.push(participante)
    }
}