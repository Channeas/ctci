// Return Kth To Last node
module.exports = function kthLast(head, k) {
    var endPointer = head,
        valuePointer = head,
        distance = 0;

    // Move the pointer K nodes before the value pointer
    while (distance < k) {
        // Make sure the next node exists
        if (endPointer.next) {
            // If it does, move the end pointer forward
            endPointer = endPointer.next;
            distance++;
        } else {
            // If not, there must be less than K nodes. Return null
            return null;
        }
    }

    // Look for the end node
    while (endPointer.next) {
        endPointer = endPointer.next;
        valuePointer = valuePointer.next;
    }

    return valuePointer;
};
