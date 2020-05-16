const express = require('express');
const OngControler = require('./controllers/OngController');
const IncidentControler = require('./controllers/IncidentController');
const ProfileControler = require('./controllers/ProfileController');
const SessionControler = require('./controllers/SessionController');
const routes = express.Router();


routes.get('/ongs', OngControler.index);

routes.post('/incidents', IncidentControler.create);
routes.get('/incidents', IncidentControler.index);
routes.delete('/incidents/:id', IncidentControler.delete)
routes.get('/profile', ProfileControler.index);
routes.post('/ongs', OngControler.create);
routes.post('/session', SessionControler.session);

module.exports = routes;

