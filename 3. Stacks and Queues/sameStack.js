// Function for comparing if two stacks are the same
module.exports = function sameStack(s1, s2) {
    // Clone the stacks
    var stack1 = cloneObject(s1),
        stack2 = cloneObject(s2);

    // Make sure that both stacks still have elements
    while (!stack1.isEmpty() && !stack2.isEmpty()) {
        // Check if the elements are not the same
        if (stack1.pop() != stack2.pop()) {
            return false;
        }
    }

    // Check if both stacks are now empty
    return stack1.isEmpty() == stack2.isEmpty();
};

// Function for cloning an object
function cloneObject(obj) {
    return Object.assign(Object.create(Object.getPrototypeOf(obj)), obj);
}
