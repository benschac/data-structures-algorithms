
function BinarySearchTree() {
  function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
  let root = null;


  this.insert = function(key) {

    let insertNode = function(node, newNode) {
      if(newNode.key < node.key) {
        node.left === null ? node.left = newNode
        : insertNode(node.left, newNode);
      } else {
        node.right === null ? node.right = newNode
        : insertNode(node.right, newNode);
      }
    }


    let node = new Node(key);
    root === null ? root = node : insertNode(root, node);
  }

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

  this.postOrderTraverse = function(cb) {

    let preOrderTraverseNode = function(node, cb) {

    }

    preOrderTraverseNode(root, cb);
  }
}

var tree = new BinarySearchTree();
   tree.insert(11);
   tree.insert(7);
   tree.insert(15);
   tree.insert(5);
   tree.insert(3);
   tree.insert(9);
   tree.insert(8);
   tree.insert(10);
   tree.insert(13);
   tree.insert(12);
   tree.insert(14);
   tree.insert(20);
   tree.insert(18);
   tree.insert(25);

function printNode(value){ //{6}
     console.log(value);
   }
   tree.inOrderTraverse(printNode); //{7}
