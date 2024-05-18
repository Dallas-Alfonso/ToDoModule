/*
This class represents a todo item and its associated
data: the todo title and a flag that shows whether the
todo item is done
*/

class Todo {
    static DONE_MARKER = "X";
    static UNDONE_MARKER = " ";
  
    constructor(title) {
      this.title = title;
      this.done = false;
    }
  
    toString() {
      let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
      return `[${marker}] ${this.title}`;
    }
  
    markDone() {
      this.done = true;
    }
  
    markUndone() {
      this.done = false;
    }
  
    isDone() {
      return this.done;
    }
  
    getTitle() {
      return this.title;
    }
  }
  
  // This class represents a collection of Todo objects.
  // You can perform typical collection-oriented actions
  // on a TodoList object, including iteration and selection.
  
  class TodoList {
    constructor(title) {
      this.title = title;
      this.todos = [];
    }
  
    add(todo) {
      if (!(todo instanceof Todo)) {
        throw new TypeError("can only add Todo objects");
      }
  
      this.todos.push(todo);
    }
  
    size() {
      return this.todos.length;
    }
  
    first() {
      return this.todos[0];
    }
  
    last() {
      return this.todos[this.size() - 1];
    }
  
    itemAt(index) {
      this._validateIndex(index);
      return this.todos[index];
    }
  
    markDoneAt(index) {
      this.itemAt(index).markDone();
    }
  
    markUndoneAt(index) {
      this.itemAt(index).markUndone();
    }
  
    isDone() {
      return this.todos.every(todo => todo.isDone());
    }
  
    shift() {
      return this.todos.shift();
    }
  
    pop() {
      return this.todos.pop();
    }
  
    removeAt(index) {
      this._validateIndex(index);
      return this.todos.splice(index, 1);
    }
  
    toString() {
      let title = `---- ${this.title} ----`;
      let list = this.todos.map(todo => todo.toString()).join("\n");
      return `${title}\n${list}`;
    }
  
    forEach(callback) {
      this.todos.forEach(todo => callback(todo));
    }
  
    filter(callback) {
      let newList = new TodoList(this.title);
      this.forEach(todo => {
        if (callback(todo)) {
          newList.add(todo);
        }
      });
  
      return newList;
    }
  
    findByTitle(title) {
      return this.filter(todo => todo.getTitle() === title).first();
    }
  
    allDone() {
      return this.filter(todo => todo.isDone());
    }
  
    allNotDone() {
      return this.filter(todo => !todo.isDone());
    }
  
    markDone(title) {
      let todo = this.findByTitle(title);
      if (todo !== undefined) {
        todo.markDone();
      }
    }
  
    markAllDone() {
      this.forEach(todo => todo.markDone());
    }
  
    markAllUndone() {
      this.forEach(todo => todo.markUndone());
    }
  
    toArray() {
      return this.todos.slice();
    }
  
    _validateIndex(index) { // _ in name indicates "private" method
      if (!(index in this.todos)) {
        throw new ReferenceError(`invalid index: ${index}`);
      }
    }
  }

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
//   let doneTodos = list.filter(todo => todo.isDone());
//   console.log(doneTodos);

  
  

/*
let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");

console.log(todo1.toString());
console.log(todo2.toString());
console.log(todo3.toString());


console.log(todo1);
console.log(todo2);
console.log(todo3);

todo1.markDone();

console.log(todo1.toString());
console.log(todo2.toString());
console.log(todo3.toString());

todo1.markUndone();

console.log(todo1.toString());
console.log(todo2.toString());
console.log(todo3.toString());


console.log(todo2.getTitle()); // => 'Clean room'






// Omitted code

let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
console.log(list);

list.add(1); // delete this line after testing it

*/