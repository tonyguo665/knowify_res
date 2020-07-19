const controls = require('../controls');
const routes = require('express').Router();

routes.route('/reservation')
.get(controls.getAll)
.post(controls.post)
.delete(controls.delete)

routes.route('/search')
.get(controls.getOne)

routes.route('/tables')
.get(controls.getTables)

module.exports = routes;