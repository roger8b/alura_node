const routes = require('express').Router();

routes.get('/attendant', (req, res) => res.status(200).send(''));

module.exports = routes;
