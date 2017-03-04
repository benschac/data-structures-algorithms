const binarySearchTree = require('./trees');

let tree;
beforeEach(() => {
  tree = new binarySearchTree();
});


describe('a tree\'s insert function', () => {
  it('creates a new node', () => {
    tree.insert(10);
    expect(tree.root.key).toBe(10);
    expect(tree.root.left).toBe(null);
    expect(tree.root.right).toBe(null);
  });
});
