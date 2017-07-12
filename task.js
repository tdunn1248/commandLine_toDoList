const fs = require('fs')
// All of these commands are being assigned a variable that has the same name
// as the file in which they are defined except `add` which you're stroing in
// `addTask` instead of `add`. It's best to be consistent about this type of
// this where possible and if a module exports a single thing by defauls you
// usually want the name of that thing to be the same as the name of the module
const addTask = require('./commands/add')
const list = require('./commands/list')
const done = require('./commands/done')

// firstArgument and secondArgument don't really tell me much
// about what these parameters are. Consider naming them something
// more descriptive. The first argument could be called 'command'.
// The second one is a little tricky since it can be different things,
// so it's hard to be too specific, but if you call the first one
// command than you could call this one `commandArgument`
const userInput = function(firstArgument, secondArgument) {
  // Nice use of a switch statement in here.
  // Much cleaner than if/else for this type of thing.
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
