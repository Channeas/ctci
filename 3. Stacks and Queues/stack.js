const LLNode = require("./LLNode");

// Lazy implementation of a Stack
class LazyStack {
    constructor() {
        this._store = [];
    }

    // Method for adding items
    push(item) {
        this._store.push(item);
    }

    // Method for retrieving items
    pop() {
        return this._store.pop();
    }

    // Method for retrieving but not removing items
    peek() {
        return this._store[this._store.length - 1];
    }

    // Method for checking if the stack is empty (but why though?)
    isEmpty() {
        return this._store.length == 0;
    }

    // Method for retrieving the size of the stack
    size() {
        return this._store.length;
    }
}

// Proper Stack
module.exports = class Stack {
    constructor() {
        this.top = null;
    }

    // Method for adding items
    push(item) {
        var newTop = new LLNode(item);
        newTop.next = this.top;
        this.top = newTop;
    }

    // Method for retrieving items
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        var node = this.top;
        this.top = this.top.next;
        return node.val;
    }

    // Method for retrieving but not removing items
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.top.val;
    }

    // Method for checking if the stack is empty
    isEmpty() {
        return this.top == null;
    }
};
