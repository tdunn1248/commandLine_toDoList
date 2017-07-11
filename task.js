const fs = require('fs')
const addTask = require('./commands/add')
const list = require('./commands/list')
const done = require('./commands/done')

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
      break
    default:
      console.log('Please enter valid command')
  }
}

userInput(process.argv[2], process.argv[3])
