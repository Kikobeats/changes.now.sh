'use strict'

const routes = require('next-routes')

module.exports = routes()
  .add('/', 'index')
  .add('/:package', 'changelog')
