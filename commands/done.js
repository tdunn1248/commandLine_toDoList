const fs = require('fs')

const done = (id) => {
  // You don't need a callback for fs.readFileSync. See my notes in the add command.
  const file = fs.readFileSync('tasks.json', 'UTF-8', (err, data) => {
    if (err) throw error
    return data
  })

  const parsed = JSON.parse(file)

  // I don't think you need to put this logic in a nested function like this. Instead you could just do the following:
  //
  // if(parsed.todos[id]) {
  //   console.log('Completed the task ' + "'" + parsed.todos[id].task + "'")
  //   delete parsed.todos[id]
  // }
  //
  // const updatedFile = JSON.stringify(parsed, null, 2)
  function deleteTask() {
    if(parsed.todos[id]) {
    console.log('Completed the task ' + "'" + parsed.todos[id].task + "'")
    delete parsed.todos[id]
    return parsed
    }
  }

  const updatedFile = JSON.stringify(deleteTask(), null, 2)

  fs.writeFile('tasks.json', updatedFile, (err) => {
    if(err) throw err
  })
}

module.exports = done
