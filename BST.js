class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	insert(value) {
		if (value < this.value) {
			if (this.left === null) {
				this.left = new BST(value);
			} else {
				this.left.insert(value);
			}
		} else if (value >= this.value) {
			if (this.right === null) {
				this.right = new BST(value);
			} else {
				this.right.insert(value);
			}
		}
	}

	printTree() {
		console.log(JSON.stringify(this, null, 2));
	}
}

module.exports = { BST };
