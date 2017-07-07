const fs = require('fs')
const addTask = require('./commands/add')
const listie = require('./commands/list')
const done = require('./commands/done')

const userInput = function(firstArgument, secondArgument) {
  switch(firstArgument) {
    case 'add':
      addTask(secondArgument)
      break
    case 'list':
      listie()
      break
    case 'done':
      done(secondArgument)
      break
  }
}

userInput(process.argv[2], process.argv[3])
