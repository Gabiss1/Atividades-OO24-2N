import { Competicao } from "./competicao";
import { Node } from "./node";

export class Temporada extends Node<Competicao>{
    private numeroTemporada: string

    constructor(raiz: Competicao){
        super(raiz)
    }
}

export class Mundial{
    private participantes: Temporada[] = []

    addParticipante(participante: Temporada): void{
        this.participantes.push(participante)
    }
}