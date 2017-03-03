const Node = require('./trees');

let node;
beforeEach(() => {
  node = new Node();
});


describe('a node', () => {
  it('has a root node that initially is null', () => {
    expect(node.root).toBe(null);
  });
});
