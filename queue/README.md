#Queues
Queue is a list structure (an array) that uses first in first out (FIFO) methods to interact with the data that's stored.  It's very similar to the Stack.  It's only difference is how the data is removed from the structure.

### Real World example
A line of people waiting to get the new Air Yeezus sneakers.  The first person in the line is going to be the first person to get the shoes. The last person to enter the line will be the last person to get the shoes (hopefully they don't sell out after this fella's been waiting around for the last five hours in the freezing cold)

```
              1st         2nd         3rd         4th
Shoe Store:: (Billy) -- (Paul) -- (Clarence) -- (James)

```

Billy gets the shoe first. James has to wait until Billy, Paul and Clarence get their shoes.  Anyone else behind James will have to wait until he gets his shoes and so on.

Removal from the list is in the front (head), Addition is in the back (tail)

### Methods
- _enqueue_: Adds an element on to the tail of the queue.
- _dequeue_: Removes an element from the head of the queue and returns the element.
- _front_: Returns the first element on the queue.
- _isEmpty_: Returns a boolean value if there are any elements in the queue or not.
- _size_: Returns the length of the elements in the queue.


### Implementation



