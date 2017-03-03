
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

  peek() {
    this.top === null ? null : this.top.data
  }

  isEmpty() {
    this.size ? true : false
  }

  count() {
    console.log(this.size);
    return this.size;
  }

  print() {
    console.log(this.count());
  }
}

class Stack {

  constructor() {
    this.list = new StackImplementation();
  }

  push(element) {
    this.list.push(element)
  }

  pop() {

    this.list.pop();

  }

  peek() {
    this.list.peek();
  }

  print() {
    this.list.print()
  }

  size() {
    this.list.count();
  }

  isEmpty() {
    this.list.isEmpty();
  }

  clear() {
    this.list = new StackImplementation();
  }

}


module.exports = Stack;
