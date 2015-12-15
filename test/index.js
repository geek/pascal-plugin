'use strict'

const Code = require('code')
const Hapi = require('hapi')
const Lab = require('lab')
const Pascal = require('../')

// shortcuts
const lab = exports.lab = Lab.script()
const describe = lab.describe
const it = lab.it
const expect = Code.expect


describe('Pascal', () => {
  it('converts a string to pascal case on spaces', (done) => {
    var server = new Hapi.Server()
    server.connection()
    server.register(Pascal, (err) => {
      expect(err).to.not.exist()
      server.inject('/something else', (res) => {
        expect(res.result).to.equal('SomethingElse')
        done()
      })
    })
  })
})
