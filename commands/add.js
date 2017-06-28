const fs = require('fs')


const addTask = (toDo) => {
  var counter = 0
  counter++
  var item = {
    id : counter,
    task: toDo
  }
  fs.appendFile('toDoList.json', JSON.stringify(item, null, 2), 'UTF-8', (err) => {
    if (err) throw error
    console.log('Created task ', item.id)
  })
}

module.exports = addTask
