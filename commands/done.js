const fs = require('fs')

const done = (id) => {
  const file = fs.readFileSync('tasks.json', 'UTF-8', (err, data) => {
    if (err) throw error
    return data
  })

  const parsed = JSON.parse(file)

  function deleteTask() {
    if(isNaN(id)) {
      console.log('Please enter a valid ID')
    }
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
