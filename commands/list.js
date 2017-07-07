const fs = require('fs')

const list = () => {
  fs.readFile('tasks.json', 'UTF-8', (err, data) => {
    if (err) throw err
    const parsedList = JSON.parse(data)
    formatToDoList()
    const toDos = parsedList.todos
    for(var key in toDos) {
      console.log(key, ' ', toDos[key].task)
    }
    console.log('\n')
    console.log(Object.keys(toDos).length, 'tasks')
  })
}

function formatToDoList() {
  console.log('\n')
  console.log('ID  Description')
  console.log('--  -----------')
}

module.exports = list
