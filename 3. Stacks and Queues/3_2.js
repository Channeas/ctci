// Stack Min
// I would implement this using two stacks, one storing all the items, and one
// storing items that are smaller than all previous items. These would be the
// local minimums
module.exports = class StackMin {
    constructor() {
        this._store = new Stack();
        this._minStore = new Stack();
    }

    push(item) {
        // Add the item to the regular stack
        this._store.push(item);

        // Check if this is the first or mininum item
        if (this._minStore.peek() == null || item <= this._minStore.peek()) {
            // If it is, add it as the global minimum
            this._minStore.push(item);
        }
    }

    pop() {
        var item = this._store.pop();

        // Remove the min element if it is the same as this one
        if (item == this._minStore.peek()) {
            this._minStore.pop();
        }

        return item;
    }

    min() {
        return this._minStore.peek();
    }
};

// Regular stack
class Stack {
    constructor() {
        this.top = null;
    }

    push(item) {
        var newTop = new llNode(item);
        newTop.next = this.top;
        this.top = newTop;
    }

    pop() {
        if (this.top == null) {
            return null;
        }
        var node = this.top;
        this.top = this.top.next;
        return node.val;
    }

    peek() {
        if (this.top == null) {
            return null;
        }
        return this.top.val;
    }
}

class llNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
