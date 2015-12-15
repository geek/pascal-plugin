'use strict'

const Code = require('code')
const Lab = require('lab')
const Pascal = require('../')

// shortcuts
const lab = exports.lab = Lab.script()
const describe = lab.describe
const it = lab.it
const expect = Code.expect


describe('Pascal', () => {
  it('converts a string to pascal case on spaces', (done) => {
    var result = Pascal('something else')
    expect(result).to.equal('SomethingElse')
    done()
  })
})
