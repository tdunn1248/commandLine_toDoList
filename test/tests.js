const chai = require('chai')
const expect = chai.expect
const fs = require('fs')

const  data = require('../tasks.json')
const  add = require('../commands/add')
const  done = require('../commands/done')
const  list = require('../commands/list')

describe('add()', function() {
  // You probably want `beforeEach` here instead of `before` to make sure that
  // the file is reset before every `it` test runs as oppose to just once at
  // the befinning. In the case it doesn'r matter since you just have one `it`
  // in this `describe` but if you add a second `it` later this `before` would
  // probably bite you.
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
    // becuase you're using readFile here and not readFileSync this.list will be undefined
    // Your test is passing becuse your `list()` function also returns undefined after printing the list to the console. These command funtions would be more testable if they accepted callback and passed the output to be printed to the callback. Then you could just print out that data in task.js and compare it to your expectations in the tests without having to print anything.
    this.list = fs.readFile('tasks.json', 'UTF-8', (err, data) => {
    })
    done()
  })
  it('list is a function', function() {
      expect(list).to.be.a('function')
      expect(list()).to.eql(this.list)
  })
})
