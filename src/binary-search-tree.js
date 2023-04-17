const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

	constructor() {
		this.root = null;
	}

  root() {
		if (!this.root) return;
    return this.root;
  }

  add(data) {
		this.root = addWhithin(this.root, data);

		function addWhithin(node, data) {
			if (!node) { return new Node(data) }

			if (data < node.data) {
				node.left = addWhithin(node.left, data);
			} else if (node.data === data) {
				return node;
			} else {
				node.right = addWhithin(node.right, data);
			}
			return node;
		}
  }

  has(data) {
    return searchWithin(this.root, data);

		function searchWithin(node, data) {
			if (!node) return false;

			if (node.data < node.value) {
				return searchWithin(node.left, data);
			} else if (node.data === node.value) {
				return true;
			} else {
				return searchWithin(node.right, data);
			}
		}
  }

  find(data) {
    return this.root;
  }

  remove(data) {
    this.root = removeNode(this.root, data);

		function removeNode(node, data) {
			if (!node) return null;

			if ( data < node.data ) {
				node.left = removeNode(node.left, data);
				return node;
			} else if ( data > node.data ) {
				node.right = removeNode(node.right, data);
				return node;
			} else {
				if (!node.left && !node.rigth) {
					return null;
				}
				if (!node.left) {
					node = node.right;
					return node;
				}
				if (!node.right) {
					node = node.left;
					return node;
				}

				let minFromRight = node.right;
				while (minFromRight.left) {
					minFromRight = minFromRight.left
				}
				node.data = minFromRight.data;
				node.right = removeNode(node.right, minFromRight.data);

				return node;
			}
		}
  }

  min() {
		if (!this.root) return;

		let node = this.root;
		while (node.left) {
			node = node.left;
		}
		return node.data;
  }

  max() {
		if (!this.root) return;
		let node = this.root;
		while (node.right) {
			node = node.right;
		}
		return node.data;
  }
}

module.exports = {
  BinarySearchTree
};