#Trees

A tree structure is similar to a real life tree or a tree like structure.  Think of a family tree or the DOM.  

```
            HTML
          /     \
        head    body
        / \      / | \
    meta link   p  div h4
                 / |
                h1 span
```
#### Terms
- *root*: is the top of the tree.  This node doesn't have a parent element.

- *internal node*: is a node with at least one child.

- *external node*: is a node with out a child. (also know as a leaf).

- *subtree*: A node and it's decendants.  This would be an internal node with it's children and it's childrens children.  All the way to it's external nodes.

- *levels*: Indexed at 0, each section of the tree. _Example:_ The h1 node in the HTML tree above would be at the 3rd level.

---

### Binary Search Tree
Is a tree structure that has a left and right child node. It organizes nodes simply from left-to-right. A node on the left is less than the parent node. The node on the right is larger than the parent.

```
              15
            /   \
           12    20
          / \     \
        7    13     25
        \
         8
```

#### Data Structure
- Holds Both the underlying nodes + Tree methods for manipulation and searching of the tree.

#### Nodes
```javascript
function Node(key) {
  this.key = key;
  this.left = null;
  this.right = null;
}
```
- Creates fresh node object to insert into the tree.
- Only the key value is assigned. Left and right children are assigned by a method.


#### Methods
- *insert(key)*: Insert a new node into the tree.
```javascript
this.insert = function(key) {
  // 1.
  let node = new Node(key);
  // 2. and 3.
  root === null ? root = node : insertNode(root, node);

  let insertnode = ...
}
```
1. Create fresh node to insert into tree.
2. If there's no root, make new node root.
3. Use a helper function to insert the node in the right
  part of the tree.

- *insertNode(node, newNode) private method*:
```javascript
let insertNode = function(node, newNode) {
  // 1
  if(newNode.key < node.key) {
  // 2
    node.left === null ? node.left = newNode
    : insertNode(node.left, newNode);
  } else {
  // 3.
    node.right === null ? node.right = newNode
    : insertNode(node.right, newNode);
  }
}
```

1. If the new key is less than the old key look to the Node's left child.

2. If node left child is null, assign node's left child to the new node.  If it's not, recursively search the tree by calling insertNode again on the node.left as it's the new node parameter.

3. Run the same directions with the right side of the binary tree.

- *search(key)*: Search for a node in the tree.
- *delete(key)*: Delete a node in the tree.
- *inOrderTraverse*: Visit all nodes of the tree in order.

```javascript
this.inOrderTraverse = function(cb) {
  let inOrderTraverseNode = function(node, cb) {
    if(node !== null) {
      inOrderTraverseNode(node.left, cb);
      cb(node.key);
      inOrderTraverseNode(node.right, cb);
    }
  }
  inOrderTraverseNode(root, cb);
}
```
  1. Recursively search through the tree by smallest key first.  If a value is null then you've hit your basecase.

  2. `inOrderTraverseNode` takes a callback function `cb` to apply an action on the node. We can write a helper function and pass it into `inOrderTraverse`.

- *preOrderTraverse*: A pre-order traversal visits the node prior to its descendants.
```javascript

```
- *postOrderTraverse*:[To-Do]
- *min*:[To-Do] Get the smallest value in the tree.
- *max*:[To-Do] Get the largest value in the tree.
- *remove(key)*:[To-Do] Remove value from the tree.
