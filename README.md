# To-Do List Node Package #
## Summary ##
This Node package allows you to create and manage to-do lists directly in the Terminal. It leverages object-oriented design principles in JavaScript to provide a robust and maintainable codebase. The package includes unit tests to ensure the quality and reliability of the code. Additionally, npm scripts with Babel are used for code transpilation, showcasing skills in constructing reusable components and maintaining high-quality code standards.

## Features ##
* Node Package: Create to-do lists in the Terminal.
* Object-Oriented Design: Utilizes principles in JavaScript for maintainable code.
* Unit Testing: Ensures code quality and reliability.
* Code Transpilation: Uses npm scripts with Babel.
## Installation ##
```js
npm install to-do-list-package
```
## Usage ##
```js
const ToDoList = require('to-do-list-package');

const myList = new ToDoList();
myList.addItem('Learn JavaScript');
myList.addItem('Build a Node.js project');
myList.showItems();
```
## Testing ##

Run unit tests to verify the functionality and reliability of the package:

```js
npm test
```
## Contributing ##
1. Fork the repository
2. Create a new branch (git checkout -b feature-branch)
3. Commit your changes (git commit -am 'Add new feature')
4. Push to the branch (git push origin feature-branch)
5. Create a new Pull Request
## License ##
This project is licensed under the MIT License.
