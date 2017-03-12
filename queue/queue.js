'use strict';

function Queue() {
    this.items = [];
}

Queue.prototype = {
    enqueue: (item) => {
        return this.items.push(item);
    },

    dequeue: () => {
        return this.items.pop();
    },

    size: () => {
        return this.items.length; 
    },

    isEmpty: () => {
        return this.items.length ? true : false;
    },

    front: () => {
        return this.items[0];
    }
}

let q = new Queue();
q.items.push('hello')
console.log(q);
