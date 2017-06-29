const fs = require('fs')

const list = () => {
  fs.readFile('tasks.json', 'UTF-8', (err, data) => {
    if (err) throw err
    console.log(data)
  })
}

module.exports = list
