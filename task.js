const fs = require('fs')
const addTask = require('./commands/add.js')
const list = require('./commands/list.js')
const done = require('./commands/done.js')

const userInput = function(firstArgument, secondArgument) {
  switch(firstArgument) {
    case 'add':
      addTask(secondArgument)
      break
    case 'list':
      list()
      break
    case 'done':
      done(secondArgument)
      // break
  }
}

userInput(process.argv[2], process.argv[3])
