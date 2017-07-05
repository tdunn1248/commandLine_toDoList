const fs = require('fs')

const done = (id) => {
  const file = fs.readFileSync('tasks.json', 'UTF-8', (err, data) => {
    if (err) throw error
    return data
  })

  const parsed = JSON.parse(file)

  function deleteTask() {
    if(parsed.todos[id]) {
    console.log('Completed the task ' + parsed.todos.task)
    parsed.todos.complete = true
    delete parsed.todos[id]
    return parsed
    }
  }
  deleteTask()

  const updatedFile = JSON.stringify(parsed , null, 2)

  fs.writeFile('tasks.json', updatedFile, (err) => {
    if(err) throw err
  })
}

module.exports = done
