const express = require('express'); // chama a dependencia
const routes = require('./routes');
const cors = require('cors');

const app= express(); // execulta ela

app.use(cors()); //segurança para restringir quem (front-end) pode usar o back-end.
app.use(express.json());
app.use(routes);
/** 
* METODOS HTTP:
*
* GET: Buscar uma informação no back-end.
* POST: Criar uma informação no back-end.
* DELETE: Deletar uma informação no back-end.
* PUT:Altera uma informação no back-end.
*/ 

/**
 * COMANDOS:
 * 
 *NPX: Exec um pacote.
 *NPM: Instalar um pacote. 
 */


/**
 * TIPOS DE PARAMETROS:
 * 
 * Query Params: Parametros nomeados enviados na rota apos o simbolo "?" (filtros, paginação).
 * Route Params: Parametros utilizados para identificar recursos (ex: users/:id ou na rota users/1).
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 * 
 */


 /**
  * BANCO DE DADOS:
  * 
  * SQL: MYSQL, PostgreSQL, Oracle, Microsoft SQL Server
  * NOSQL: MongoDB, CouchDB
  * 
  * Driver: SELECT * FROM USERS
  * Query Builder: table('users').select('*').where('')
  */





app.listen(3333)  //define uma porta para execultar

