// Custom implementation of a Stack (I know, it shouldn't use an Array...)
class Stack {
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
