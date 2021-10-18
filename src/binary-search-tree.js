const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.treeRoot === null)  this.treeRoot = newNode;
    else this.addNode(this.treeRoot, newNode);
  }

  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this.addNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.addNode(node.right, newNode);
    }
  }

  has(data) {
    return this.find(data) ? true : false;
  }

  find(data) {
    return this.search(this.treeRoot, data);
  }

  search(node, data) {
    if(node === null) return null;
    else if(data < node.data) return this.search(node.left, data);
    else if(data > node.data) return this.search(node.right, data);
    else return node;
  }

  remove(data) {
    this.treeRoot = this.removeNode(this.treeRoot, data);
  }

  removeNode(node, key) {
    if (node === null) return null;
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    }
    else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    // if data is similar to the root's data
    // then delete this node
    else {
      // deleting node with no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      // deleting node with one children
      if (node.left === null) {
        node = node.right;
        return node;
      }
      if (node.right === null) {
        node = node.left;
        return node;
      }

      // Deleting node with two children
      // minimum node of the right subtree
      // is stored in aux
      let aux = this.getMin(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  getMin(node) {
    if (!node.left) return node;
    return this.getMin(node.left);
  }
  
  getMax(node) {
    if (!node.right) return node;
    return this.getMax(node.right);
  }

  min() {
    let res = this.getMin(this.treeRoot).data;
    return res;
  }

  max() {
    let res = this.getMax(this.treeRoot).data;
    return res;
  }

}