import { Aluno } from "./aluno";
import { Instrutor } from "./instrutor";
import { Usuario } from "./usuario";
import { Avaliacao } from "./avaliacao";
import { Equipamento } from "./equipamento";
import { Treino } from "./treino";
import { Exercicio } from "./exercicio";

const aluno1 = new Aluno('Gabriel', 'email@gmail.com', 18, 75, 1.65)
const instrutor1 = new Instrutor('Gabriel Mano', 'mano@gmail.com', 'Perna', '9999999999')
const exercicio1 = new Exercicio('Flexão', 5, 2)
const treino1 = new Treino(aluno1, instrutor1, exercicio1)
const avaliacao1 = new Avaliacao(aluno1, '18/04/2006', 'Fez o exercicio corretamente')

treino1.getTreino()
console.log(avaliacao1.gerarRelatorio())