const Stack = require("./stack");
// Stack of Plates
// Store the stacks and their sizes in an array (not a stack due to popAt(index))
// If a stack exceeds the limit, we add a new one at the array start
module.exports = class SetOfStacks {
    constructor() {
        this._capacity = 50; // Arbitrary. No capacity was specified
        this._stacks = [];
    }

    push(item) {
        // Check if there are no stacks or if the top one is full
        let stack = this._stacks[0];
        if (this._stacks.length == 0 || stack.size >= this._capacity) {
            // If so, create a new stack
            this._createStack(item);
            return;
        }

        // Else do a regular push
        stack.store.push(item);
        stack.size++;
    }

    // Internal function for creating a new stack
    _createStack(item) {
        let stack = new Stack();
        stack.push(item);
        this._stacks.unshift({ store: stack, size: 1 });
    }

    pop() {
        // Make sure there is at least one stack
        if (this._stacks.length == 0) {
            return null;
        }

        // Retrieve the item
        let stack = this._stacks[0];
        let item = stack.store.pop();
        stack.size--;

        // Potentially remove the stack
        if (stack.size <= 0) {
            this._stacks.shift();
        }

        return item;
    }

    popAt(index) {
        // Make sure there is at least one stack
        if (this._stacks.length == 0) {
            return null;
        }

        let realIndex = this._stacks.length - index - 1,
            stack = this._stacks[realIndex],
            item = stack.store.pop();
        stack.size--;

        // Potentially remove the stack
        if (stack.size <= 0) {
            this._stacks.splice(realIndex, 1);
        }

        return item;
    }
};
