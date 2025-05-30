import { Pessoa } from "./pessoa";
import { Relacionavel } from "./pessoa";
import { ArvoreGenealogica } from "./arvoreGenealogica";
import { Noh } from "./noh";

const eu = new Pessoa("Gabriel", "Garcez de Oliveira", "18/04/2006", 'Masculino')
const pai = new Pessoa("César Leandro", "Garcez de Oliveira", "18/04/2006", 'Masculino')
const mae = new Pessoa("Sandra Patrícia", "Garcez de Oliveira", "18/04/2006", "Feminino")
const irma = new Pessoa("Isabelly", "Garcez de Oliveira", "18/04/2006", 'Feminino')
const irma2 = new Pessoa("Camilly", "Garcez de Oliveira", "18/04/2006", 'Feminino')
const avo1 = new Pessoa("Isabete", "Garcez de Oliveira", "18/04/2006", 'Feminino')
const avoo1 = new Pessoa("Walmor José", "Garcez de Oliveira", "18/04/2006", 'Masculino')
const avo2 = new Pessoa("Sílvia Claudete", "Rodrigues Garcia", "18/04/2006", 'Feminino')
const avoo2 = new Pessoa("Deumar", "Rodrigues Garcia", "18/04/2006", 'Masculino')

const nohEu = new Noh<Pessoa>(eu)
const nohPai = new Noh<Pessoa>(pai)
const nohMae = new Noh<Pessoa>(mae)
const nohAvoo = new Noh<Pessoa>(avo1)
const nohVo = new Noh<Pessoa>(avoo1)
const nohAvoo2 = new Noh<Pessoa>(avo2)
const nohVo2 = new Noh<Pessoa>(avoo2)

eu.addChildren(pai)
eu.addChildren(mae)
eu.addChildren(irma)
eu.addChildren(irma2)