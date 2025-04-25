import { Feitico } from "./feiticoInterface";
import { FeiticoAtaque } from "./feiticos";
import { FeiticoDefesa } from "./feiticos";
import { LugarMagico } from "./lugarersMagicos";
import { Bruxo } from "./bruxo";
import { Cerberus } from "./guardiao";
import { Basilisco } from "./guardiao";

let cruciatosCurse = new FeiticoAtaque('Crucio', 60, 'causa o recipiente deste feitico a sentir uma dor tremenda sem danificar sua forma fisica.');
let protego = new FeiticoDefesa('Protego', 40, 'magia defensiva que conjura um escudo invisivel repelindo encantamentos fisicos.')

let salaoPrincipal = new LugarMagico('Salão principal', 1, 'N/A')
let florestaProibida = new LugarMagico('Floresta proibida', 1, 'por ser uma área restrita há grande potencial de perigo, com seu maior destaque sendo a variedade de criaturas mágicas.')

let fofo = new Cerberus('Fofo', 600, 'Fera', 350, 250, cruciatosCurse)
let escamoso = new Basilisco('Basilisk', 510, 'Cobra', 270, 250, protego)