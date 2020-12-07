const Stack = require("./stack");
// Sort Stack
// I assumed I need to modify the original Stack. If it was allowed to return a new
// Stack, I would replace "<" with ">" on line 14 and remove lines 27 to 29
module.exports = function sortStack(stack) {
    const tempStack = new Stack();

    // Make sure to sort all elements
    while (!stack.isEmpty()) {
        // Get the topmost item
        let item = stack.pop();

        // Move to the right position in the temporary stack
        while (!tempStack.isEmpty() && item < tempStack.peek()) {
            // Add the larger element back to the original stack
            stack.push(tempStack.pop());
        }

        // Add the item to it's (reverse) sorted position
        tempStack.push(item);

        // NOTE: The previously sorted elements that got moved are placed back
        // automatically in following iterations
    }

    // Shift back the sorted temporary stack (reversing, placing smaller items at the top)
    while (!tempStack.isEmpty()) {
        stack.push(tempStack.pop());
    }
};
