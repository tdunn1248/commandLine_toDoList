const fs = require('fs')
// Why not use an array for the todos attribute?
const starter = {serialId: 0, todos: {}}

const addTask = (toDo) => {

  // You're using readFileSync here, which doesn't take a callback (becuase it
  // synchonous) so the callback you're passing in will never be executed and
  // can be removed. see fs.readFile for the async version
  const file = fs.readFileSync('tasks.json', 'UTF-8', (err, data) => {
    // This callback isn't being called, so this code is never reached, but if
    // you *were* using the async readFile version this logic still wouldn't
    // work the way you want it to. If the file is missing an error would be
    // thrown on line 16 so you'd still never reach the `if(!data)` statement.
    if (err) throw error
    console.log('--->', data);
    if (!data) {
      // Instead of writing the started data to the file here you could just
      // initialize the `parsed` variable with the starter if the file didn't exist
      // or JSON.parse(file) fails for some reason. That way you're only writing to the file once.
      fs.writeFile('tasks.json', JSON.stringify(starter), (err) => {
        if (err) throw err
      })
    }
    return data
  })

  const parsed = JSON.parse(file)

  let item = {
    task: toDo,
    // Since you just delete the task when it's complete you can probably
    // remove this "complete" attribute.
    complete: false
  }

  // The following two lines can be one:
  // parsed.todos[parsed.serialId++] = item
  parsed.serialId++
  parsed.todos[parsed.serialId] = item

  const updatedFile = JSON.stringify(parsed, null, 2)

  console.log('Created task ' + parsed.serialId + '.');

  fs.writeFile('tasks.json', updatedFile, (err) => {
    if (err) throw err
  })
}

module.exports = addTask
