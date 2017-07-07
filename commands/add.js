const fs = require('fs')

const addTask = (toDo) => {

  const file = fs.readFileSync('tasks.json', 'UTF-8', (err, data) => {
    if (err) throw error
    fs.writeFile('tasks.json', JSON.stringify(starter), (err) => {
      if (err) throw err
    })
    return data
  })

  const parsed = JSON.parse(file)

  let item = {
    task: toDo,
    complete: false
  }

  parsed.todos[parsed.serialId] = item
  console.log('Created task ' + parsed.serialId + '.')
  parsed.serialId++

  const updatedFile = JSON.stringify(parsed, null, 2)

  fs.writeFile('tasks.json', updatedFile, (err) => {
    if (err) throw err
  })
}

module.exports = addTask
