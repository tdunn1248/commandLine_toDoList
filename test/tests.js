import 'babel-polyfill'
import { expect } from 'chai'

const  done = require('../commands/done')

describe('done()', function() {

  it('should be a function', function() {
    expect(done).to.be.a('function')
  })
  
})
