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

### Binary Search Tree