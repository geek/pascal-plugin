'use strict'

const _ = require('lodash')

exports.pascal = function (input) {
  return _.capitalize(_.camelCase(input))
}
