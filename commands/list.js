const fs = require('fs')

const list = (file) => {
  fs.readFile('toDoList.json', 'UTF-8', (err, data) => {
    if (err) throw err
    console.log(data)
  })
}

module.exports = list
