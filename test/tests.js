const chai = require('chai')
const expect = chai.expect
const fs = require('fs')

const  data = require('../tasks.json')
const  add = require('../commands/add')
const  done = require('../commands/done')
const  list = require('../commands/list')

describe('add()', function() {
  before(function(done) {
    this.starter = {serialId: 0, todos: {}}
    fs.writeFile('tasks.json', JSON.stringify(this.starter), (err) => {
      if (err) throw err
    })
    done()
  })
  it('add is a function', (done) =>  {
    add('Walk the Cat')
    const testTask = {
      serialId: 1,
      todos: {
        "1": {
          "task": "Walk the Cat",
          "complete": false
        }
      }
    }
    fs.readFile('tasks.json', 'UTF-8', (err, data) => {
      expect(add).to.be.a('function')
      expect(JSON.parse(data)).to.eql(testTask)
      done()
    })
  })
})

describe('done()', function() {
  before(function(done) {
    this.starter = {serialId: 0, todos: {"1": {"task": "Walk the Cat","complete": false}}}
    fs.writeFileSync('tasks.json', JSON.stringify(this.starter), (err) => {
       if (err) throw err
    })
    done()
  })

  it("done is a function that removes task item with parameter's id", function() {
    done(1)
    fs.readFile('tasks.json', 'UTF-8', (err, data) => {
      expect(done).to.be.a('function')
      expect(JSON.parse(data)).to.eql({serialId: 0, todos: {}})
    })
  })
})

describe('list()', function() {
  before(function(done) {
    this.list = fs.readFile('tasks.json', 'UTF-8', (err, data) => {
    })
    done()
  })
  it('list is a function', function() {
      expect(list).to.be.a('function')
      expect(list()).to.eql(this.list)
  })
})
