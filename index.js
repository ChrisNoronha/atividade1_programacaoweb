const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000; // ou altere a porta se necessário

// Configurar o middleware para parsear o corpo das requisições
app.use(bodyParser.urlencoded({ extended: false }));

// Configurar o middleware para servir arquivos estáticos (HTML)
app.use(express.static('src/views'));

// Importar e usar as rotas da calculadora
const calculadoraRoutes = require('./src/routes/calculadoraRoutes');
app.use('/calculadora', calculadoraRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
