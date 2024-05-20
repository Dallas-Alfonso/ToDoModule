/*
const Todo = require('./lib/todo.js');
const TodoList = require('./lib/todolist.js');

let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");
let todo5 = new Todo("Feed the cats");
let todo6 = new Todo("Study for Launch School");
let list = new TodoList("Today's Todos");

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
list.add(todo5);
list.add(todo6);
todo1.markDone();
todo5.markDone();


console.log(list.toString()) 
*/

module.exports = {
    TodoList: require('./dist/todolist'),
    Todo: require('./dist/todo'),
  };