const fs = require('fs')

const addTask = (toDo) => {
  const file = fs.readFileSync('jsonmock.json', 'UTF-8', (err, data) => {
    if (err) throw error
    return data
  })

  const parsed = JSON.parse(file)
  var item = {
    task: toDo,
    complete: false
  }

  parsed.todos[parsed.serialId] = item
  parsed.serialId++

  const secondParse = parsed
  const updatedFile = JSON.stringify(secondParse, null, 2)

  fs.writeFile('jsonmock.json', updatedFile, (err) => {
    if (err) throw err
  })
}

module.exports = addTask
