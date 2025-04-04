import { Aluno } from "./aluno";
import { Instrutor } from "./instrutor";
import { Usuario } from "./usuario";
import { Avaliacao } from "./avaliacao";
import { Equipamento } from "./equipamento";
import { Treino } from "./treino";
import { Exercicio } from "./exercicio";

const aluno1 = new Aluno('Gabriel', 'email@gmail.com', 18, 75, 1.65)
const instrutor1 = new Instrutor('Gabriel Mano', 'mano@gmail.com', 'Perna', '9999999999')
const exercicio1 = new Exercicio('Levantamento Terra', 5, 2)
const treino1 = new Treino(aluno1, instrutor1, exercicio1)
const avaliacao1 = new Avaliacao(aluno1, '18/04/2006', 'Fez o exercicio corretamente')
const equipamento1 = new Equipamento('Barra', 'Uma barra com pesos de ambos os lados.', true)

// Treino Normal

treino1.getTreino()
avaliacao1.gerarRelatorio()

// Usando o método Treino
console.log(`\n\nTreinar\n\n`)

treino1.treinar(equipamento1)
avaliacao1.gerarRelatorio()

// Usando o método Treino - Falhando
console.log(`\n\nTreinar - Falha\n`)

equipamento1.disponibilidade = false

treino1.treinar(equipamento1)