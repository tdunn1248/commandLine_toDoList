const chai = require('chai')
const expect = chai.expect

const  add = require('../commands/add')
const  done = require('../commands/done')
const  list = require('../commands/list')

describe('add()', function() {
    it('add is a function', function() {
        expect(add).to.be.a('function')
    })
})

describe('done()', function() {
    it('done is a function', function() {
        expect(done).to.be.a('function')
    })
    // it('it takes one number argument', function() {
    //   expect(done(5)).to.equal('')
    // })
})

describe('list()', function() {
    it('list is a function', function() {
        expect(list).to.be.a('function')
    })
})
