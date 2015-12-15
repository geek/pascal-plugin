'use strict'

const _ = require('lodash')

exports.register = function (server, options, next) {
  server.decorate('reply', 'pascal', pascal)
  server.route({
    method: 'GET',
    path: '/{toPascal}',
    handler: function (request, reply) {
      reply.pascal(request.params.toPascal)
    }
  })

  next()
}

exports.register.attributes = {
  pkg: require('./package.json')
}

const pascal = function (input) {
  this.response(_.capitalize(_.camelCase(input)))
}
