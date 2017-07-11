const fs = require('fs')
const starter = {serialId: 0, todos: {}}

const addTask = (toDo) => {

  const file = fs.readFileSync('tasks.json', 'UTF-8', (err, data) => {
    if (err) throw error
    console.log('--->', data);
    if (!data) {
      fs.writeFile('tasks.json', JSON.stringify(starter), (err) => {
        if (err) throw err
      })
    }
    return data
  })

  const parsed = JSON.parse(file)

  let item = {
    task: toDo,
    complete: false
  }

  parsed.serialId++
  parsed.todos[parsed.serialId] = item

  const updatedFile = JSON.stringify(parsed, null, 2)

  console.log('Created task ' + parsed.serialId + '.');

  fs.writeFile('tasks.json', updatedFile, (err) => {
    if (err) throw err
  })
}

module.exports = addTask
