#Stack Implemented in Javascript with ES6 features.


### Summary
Is a collection of values.  A list of values (array).  A [stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) is uses last in first out (LIFO). The end of the stack is called the top, the bottom is called the base.

***Real world Example:***
Think of a stack of papers. You add papers on the base, then you remove papers from the top.

```
(Using common pieces of mail)


(3) Bank statement (added fourth) (removed first)
(2) cell phone bill (added third) (removed second)
(1) water bill (added second) (removed third)
(0) electric bill (added first) (removed fourth)
```



#### Methods
- push (Add element to stack)
- pop (Remove first element in stack)
- size (Get size of stack)
- peek (Get last value of stack)
- isEmpty (Boolean value if stack has elements stored)
- clear (Remove all items from stack)


### Implementation

#### Node
Is the underlying data store in the stack.  It holds a data value (which it gets from an argument) and a pointer to the previous node.

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.previous = null;
  }
}
```

#### Stack Implementation (instance variables)
The stack is what strings together the nodes creating the structure. We can use a `this.top` and `this.size` instance variable to keep track of size and what's on top of the stack.

This is the structure that's going to be used by the stack.  Additionally we could've used javascript's array, WeakMap or Symbol primitive to implement a similar structure.  


```javascript
class StackImplementation {
  constructor() {
    this.top = null;
    this.size = 0;
  }
}
```

#### Stack Implementation (methods)

```javascript
class StackImplementation {
  ...
  push(data) {
    let node = new Node(data);
    node.previous = this.top;
    this.top = node;
    this.size += 1;
    return this.top;
  }

}
```
- push: Creates a new node, sets the node's previous pointer to the current `this.top` of the StackImplementation, adding it to the start of the structure. Then, it updates `this.top` to the fresh node that holds the new data, increments the `this.size` and returns the `this.top` which is now the whole structure.

```javascript
class StackImplementation {
  ...
  pop() {
    this.top = this.top.previous;
    this.size -= 1;
    return this.top;
  }

}
```

- pop: Removes the first node from the structure. `this.top` is set to the structures previous pointer, size is decremented and the new structure `this.top` is returned.



#### Count and Size, is Empty
Both are just returning a value or simple boolean

```javascript
class StackImplementation {
  ...
  count() {
    console.log(this.size);
    return this.size;
  }

  print() {
    console.log(this.top);
  }

  isEmpty() {
    this.size ? true : false
  }
}
```


#### Stack
This the interface that will use the Implementation to store the data. Think of `StackImplementation` as a custom array.

```javascript
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

```
