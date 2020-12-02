// Custom implementation of a Stack (lazy, improper version)
class Queue {
    constructor() {
        this._store = [];
    }

    // Method for adding items
    add(item) {
        this._store.push(item);
    }

    // Method for removing/retrieving items
    remove() {
        return this._store.shift();
    }

    // Method for retrieving the first item
    peek() {
        return this._store[0];
    }

    // Method for checking if the stack is empty
    isEmpty() {
        return this._store.length == 0;
    }

    // Method for retrieving the size of the queue
    size() {
        return this._store.length;
    }
}
