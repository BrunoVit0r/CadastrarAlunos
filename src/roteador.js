const express = require('express');
const { obterAlunos, alunoPorId, adicionarAluno, excluirAluno } = require('./controladores/alunos');

const rotas = express();

rotas.get('/alunos', obterAlunos);
rotas.get('/alunos/:id', alunoPorId);
rotas.post('/alunos', adicionarAluno);
rotas.delete('/alunos/:id', excluirAluno);

module.exports = rotas;