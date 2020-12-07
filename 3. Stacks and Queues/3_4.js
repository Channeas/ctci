const Stack = require("./stack");
// Queue via Stacks
module.exports = class MyQueue {
    constructor() {
        this._queue = new Stack();
        this._helper = new Stack();
    }

    add(item) {
        // Empty the queue into the helper
        while (this._queue.peek()) {
            this._helper.push(this._queue.pop());
        }

        // Add the new item
        this._queue.push(item);

        // Move back the items from the helper
        while (this._helper.peek()) {
            this._queue.push(this._helper.pop());
        }
    }

    remove() {
        // Get the topmost item
        return this._queue.pop();
    }

    peek() {
        // Get the topmost item without removal
        return this._queue.peek();
    }
};
