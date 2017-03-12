'use strict';

// ES6 way using WeakMap().

let Queue2 = (function() {
    const items = new WeakMap();

    class Queue {
        constructor() {
            items.set(this, []);
        }

        enqueue(element) {
            let q = items.get(this); 
            q.push(element)
        }

        dequeue() {
            
        }

    }

})();



// ES5'ish way using constructor functions
function Queue() {
    let items = [];

    this.enqueue = (item) => {
        return items.push(item);
    },

    this.dequeue = () => {
        return items.shift();
    },

    this.size = () => {
        return items.length; 
    },

    this.isEmpty = () => {
        return items.length ? true : false;
    },

    this.front = () => {
        return items[0];
    }
}


let q = new Queue();
q.items.push('hello')
console.log(q);
