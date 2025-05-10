import { FilaTemporal } from "./filaTemporal";
import { PersonagemTemporal } from "./heroisTemporais";

const filaMarvel = new FilaTemporal()
const filaDC = new FilaTemporal()

const capAmerica = new PersonagemTemporal('Steve Rogers', 'Terra-616', filaMarvel)
const raioNegro = new PersonagemTemporal('Raio Negro', 'Terra-2122', filaMarvel)
const homemFormiga = new PersonagemTemporal('Homem-Formiga', 'Terra-616', filaMarvel)
const aranhapunk = new PersonagemTemporal('Aranha Punk', 'Terra-138', filaMarvel)
const miguelOhara = new PersonagemTemporal('Homem Aranha 2099', 'Terra-2099', filaMarvel)

