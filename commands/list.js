const fs = require('fs')

// You're using different syntax for creating functions in different places.
// This one uses `const name = () => {}` while the second function in this file
// uses `function name () {}`. You're code will be cleaner and easier to follow
// if you're consistent. I prefer the traditional `function name () {}` syntax
// for top-level functions in a file like this.
const list = () => {
  fs.readFile('tasks.json', 'UTF-8', (err, data) => {
    if (err) throw err
    const parsedList = JSON.parse(data)
    formatToDoList()
    const toDos = parsedList.todos
    // `var` can be `const` here. Always use either `const` or `let`
    for(var key in toDos) {
      console.log(key, ' ', toDos[key].task)
    }
    console.log('\n')
    console.log(Object.keys(toDos).length, 'tasks')
  })
}

// Instead of having this function just print the header, you could pass the whole todo list object into this function and make it responsible for formatting the whole thing and returning a string. Then in the readfile callback you could do this:
//
// const output = formatToDoList(parsedList)
// console.log(output)
//
function formatToDoList() {
  console.log('\n')
  console.log('ID  Description')
  console.log('--  -----------')
}

module.exports = list
