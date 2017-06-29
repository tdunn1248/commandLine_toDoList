const fs = require('fs')

const list = () => {
  fs.readFile('tasks.json', 'UTF-8', (err, data) => {
    if (err) throw err
    const parsedList = JSON.parse(data)
    console.log('ID Description')
    console.log('-- -----------')
    const toDos = parsedList.todos
    for(var key in toDos) {
      console.log(key, toDos[key].task)
    }
    console.log('\n', Object.keys(toDos).length, 'tasks')
  })
}

module.exports = list
