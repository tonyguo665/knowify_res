const controls = require('../controls');
const routes = require('express').Router();

routes.route('/reservation')
.get(controls.get)
.post(controls.post)

module.exports = routes;