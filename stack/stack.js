// To-Do, ditch array and create the underlying structure.

// Using the new Symbol primitive is an option, but you
// can still mutate the array in different places if you wish.
// ex.
// let _items = Symbol();
// let items = new WeakMap();

class Node {
  constructor(data) {
    this.data = data;
    this.previous = null;
  }

}

class StackImplementation {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    let node = new Node(data);
    node.previous = this.top;
    this.top = node;
    this.size += 1;
    return this.top;
  }

  pop() {
    this.top = this.top.previous;
    this.size -= 1;
    return this.top;
  }

  count() {
    console.log(this.size);
    return this.size;
  }

  print() {
    console.log(this.top);
  }
}

class Stack {

  constructor() {
    this.list = new StackImplementation();
    // Creates public instance varible that can be mutated.
    // this.list = [];

    // Symbol Implementation
    // this[_items] = [];
  }

  push(element) {
    this.list.push(element)


    // s.push(element);

    // Symbol Implementation
    // this[_items].push();

    // Instance varible Implementation.
    // this.list.push(element);
  }

  pop() {

    this.list.pop();
    // let s = items.get(this);
    // s.pop(element);

    // Symbol Implementation
    // this[_items].pop()

    // Instance varible Implementation.
    // this.list.pop();
  }

  peek() {

    let s = items.get(this);
    return s[s.length - 1];

    // Instance varible Implementation
    // return this.list[this.list.length - 1];

    // Symbol Implementation
    // return this[_items][this[_items].length - 1];
  }

  size() {

    console.log(this.list.count());

    // let s = items.get(this);
    // return s.length;

    // Symbol Implementation
    // this[_items].length;

    // Instance varible implementation
    // return this.list.length;
  }

  isEmpty() {

    let s = items.get(this);
    return s.length === 0;

    // Instance method implementation.
    // return this.list.length === 0;
  }

  clear() {
    let s = items.get(this);
    s.push(element);

    // Instance varible method
    // this.list = [];
  }

}

let stack = new Stack();
stack.push('helo');
stack.push('hello again');
stack.push('to remove');
stack.pop();
stack.size()

// console.log(stack.push('push again'));


// MUTATION OF ARRAY USING SYMBOL PRIMITIVE
// let stack = new Stack();
// stack.push(8);
// let objectSymbols = Object.getOwnPropertySymbols(stack);
// console.log(objectSymbols.length); // 1
// console.log(objectSymbols); // [Symbol()]
// console.log(objectSymbols[0]); // Symbol()
// stack[objectSymbols[0]].push(1);
// stack.print();



// Using a constructor function implementation.
// function StackConstructor() {
//   let items = [];
//
//   // Push element on to the stack.
//   this.push = element => {
//     items.push(element);
//   }
//
//   // remove element from the top of the stack.
//   this.pop = () => {
//     items.pop();
//   }
//
//   // Look at the last element of the stack.
//   this.peek = () => {
//     return items[items.length - 1];
//   }
//
//   // Get the size of the stack.
//   this.size = () => {
//     return items.length;
//   }
//
//   this.isEmpty = () => {
//     return arr.length === 0;
//   }
//
//   this.clear = () => {
//     items = [];
//   }
// }
//
