const express = require('express');
const { obterAlunos, alunoPorId, adicionarAluno } = require('./controladores/alunos');

const rotas = express();

rotas.get('/alunos', obterAlunos);
rotas.get('/alunos/:id', alunoPorId);
rotas.post('/alunos', adicionarAluno);

module.exports = rotas;