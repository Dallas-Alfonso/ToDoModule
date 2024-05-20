/*
Project To do:
Clarify fitler logic

*/

/*
This class represents a todo ITEM and its ASSOCIATED
DATA: the TODO TITLE AND a FLAG that shows whether the
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
    /*
    Invoke 'toString' to visualize in terminal via console.log
      - "todo ITEM and its ASSOCIATED DATA: the TODO TITLE AND a FLAG"
    */
  
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
  
    add(todo) { // Arg needs to be an INSTANCE of todo Constructor
      if (!(todo instanceof Todo)) {
        throw new TypeError("can only add Todo objects");
      }
      // To array 'todos' push arg provided
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

    /*
    Custom Project forEach Method - RECURSIVE VERSION
    - Reason: Now, have a standard way to iterate through the todos on a todo list
     
     ```
     list.forEach(todo => {
     // Do something with each todo
     });
     ```

    Method 'forEach' that TAKES a CALLBACK function as an argument
    The method 'forEach' then applies the method to its 'todos' array
    where for each elem of 'todos' array, we invoke the callback PROVIDED
    
    ie (argument):
    list.forEach(todo => console.log(todo.toString()));
    */

    /*
    forEach(callback) {
      this.todos.forEach(callback);  //todo => callback(todo)
      //accessing 'todos' array
    }
    */


    /* 
    Non Recusive Version

    'forEach' method that takes a callback method
    we the begin an iteration of 'todos' array
    Per iter, invoke callback arg on each elem iter of 'todos' array
    */
    forEach(callback) {
      for (let index = 0; index < this.size(); index += 1) {
        callback(this.todos[index]);
      }
    }

    /*
    Notes on why create custom forEach

    Custom - easier to work with methods defined by the TodoList class.
           - don't have to access the internal state of the TodoList object.
    list.forEach(todo => {
    // Do something with each todo 
    });
    
    Default - 
    list.todos.forEach(todo => {
    // Do something
    });

    */

    
    /*
    Custom Filter

    Takes a callback function
    creates a 'newList' var that holds reference to new object created by 'todoList' constructor 
      - arg is 'current obj (this)' title

    Iterate 'current obj' 'todos' arr and per todo
    check if value of invoking 'callback' arg using current 'todo' elem is truthy value
    if true: to local 'newList' variable, add current iter elem 'todo'
    if false: skip to next iter

    After iter, return arr

    doneTodos - Variable that returns array of COMPLETED TO DO
    let doneTodos = list.filter(todo => todo.isDone());
    console.log(doneTodos);
    */
    filter(callback) {
      let newList = new TodoList(this.title); // ARR to be returned
      this.forEach(todo => { // iter this obj's 'todos' array, per elem ('todo')
        if (callback(todo)) { // check if value of - using 'todo' elem as arg to callback - is TRUTHY
          newList.add(todo);  // if true, add 'todo' elem to this obj 'todos' array
        }
      });
  
      return newList; // Need to Clarify, how are we returning array when new list is an object?
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