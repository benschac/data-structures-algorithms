module.exports = Node;

function binarySearchTree() {
  function Node(key) {
    this.key = key;
    this.left = left;
    this.right = right;
  }

  this.insert = function(key) {
    let node = new Node(key);
    root === null ? root = node : insertNode(root, node);



    let insertNode = function(node, newNode) {
      if(newNode.key < node.key) {
        node.left === null ? node.left = newNode
        : insertNode(node.left, newNode);
      } else {
        node.left === null ? node.right = newNode
        : insertNode(node.right, newNode);
      }
    }
  }


  let root = null;
}
