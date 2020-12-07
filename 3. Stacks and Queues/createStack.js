const Stack = require("./stack");
// Function that creates a stack from an array
module.exports = function createStack(items) {
    const stack = new Stack();

    // Loop through all the input items, adding them to the stack
    for (var item of items) {
        stack.push(item);
    }

    return stack;
};
