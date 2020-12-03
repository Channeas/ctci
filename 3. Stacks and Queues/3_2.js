const Stack = require("./stack");
// Stack Min
// I would implement this using two stacks, one storing all the items, and one
// storing items that are smaller than all previous items. These would be the
// local minimums
module.exports = class StackMin extends (
    Stack
) {
    constructor() {
        super();
        this._minStore = new Stack();
    }

    push(item) {
        // Add the item to the regular stack
        super.push(item);

        // Check if this is the first or mininum item
        if (this._minStore.isEmpty() || item <= this._minStore.peek()) {
            // If it is, add it as the global minimum
            this._minStore.push(item);
        }
    }

    pop() {
        var item = super.pop();

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
