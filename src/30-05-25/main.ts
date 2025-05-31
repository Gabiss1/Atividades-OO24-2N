import { Competicao } from "./competicao";
import { Estadual } from "./competicao";
import { Nacional } from "./competicao";
import { Continental } from "./competicao";
import { Temporada } from "./temporada";
import { Mundial } from "./temporada";
import { Node } from "./node";

const estadual = new Estadual("Gauchão")
const nacional = new Nacional("Brasileirão Série A")
const nacionalB = new Nacional("Brasileirão Série B")
const nacionalC = new Nacional("Brasileirão Série C")
const nacionalD = new Nacional("Brasileirão Série D")
const continental = new Continental("Libertadores")
const continentalB = new Continental("Sulamericana")

const nodeContinental = new Node<Competicao>(continental)
const nodeContinentalB = new Node<Competicao>(continentalB)
const nodeCampNacional = new Node<Competicao>(nacional)
const nodeCampNacionalB = new Node<Competicao>(nacionalB)
const nodeCampNacionalC = new Node<Competicao>(nacionalC)
const nodeCampNacionalD = new Node<Competicao>(nacionalD)
const nodeEstadual = new Node<Competicao>(estadual)

nodeContinental.addChildren(nodeCampNacional)
nodeContinental.addChildren(nodeContinentalB)
nodeContinentalB.addChildren(nodeCampNacional)
nodeCampNacional.addChildren(nodeCampNacionalB)
nodeCampNacionalB.addChildren(nodeCampNacionalC)
nodeCampNacionalC.addChildren(nodeCampNacionalD)
nodeCampNacionalD.addChildren(nodeEstadual)

const temporada = new Temporada(nodeContinental, "Temporada 2024")