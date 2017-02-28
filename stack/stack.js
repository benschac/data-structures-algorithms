class Stack {
  constructor(list) {
    this.list = list;
  }

  push(element) {
    this.list.push(element);
  }

  size() {
    return this.list.length;
  }
}



// Using a constructor function implementation.
function StackConstructor() {
  let items = [];

  // Push element on to the stack.
  this.push = element => {
    items.push(element);
  }

  // remove element from the top of the stack.
  this.pop = () => {
    items.pop();
  }

  // Look at the last element of the stack.
  this.peek = () => {
    return items[items.length - 1];
  }

  // Get the size of the stack.
  this.size = () => {
    return items.length;
  }

  this.isEmpty = () => {
    return arr.length === 0;
  }

  this.clear = () => {
    items = [];
  }
}



let stack = new StackConstructor();

stack.push('hello');
stack.push(2);
stack.pop();


console.log(stack.peek());
console.log(stack.size());
