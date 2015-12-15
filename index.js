'use strict'

const _ = require('lodash')

module.exports = function (input) {
  return _.capitalize(_.camelCase(input))
}
