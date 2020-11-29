// Calculate the sum of two linked lists
// Overly complex solution. Should ideally be recursive
module.exports = function sumLists(head1, head2) {
    var node1 = head1,
        node2 = head2,
        overflow = 0;

    // Go through the lists simultaneously
    while (node1 && node2) {
        // Calculate the sum
        var sum = node1.val + node2.val + overflow;

        // Determine if there is an overflow
        if (sum >= 10) {
            overflow = 1;
            sum -= 10;
        } else {
            overflow = 0;
        }

        // Update the values
        (node1.val = sum), (node2.val = sum);

        // Proceed to the next nodes
        node1 = node1.next;
        node2 = node2.next;
    }

    // Check if the lists were the same length
    if (!node1 && !node2) {
        // Check if there was an overflow
        if (overflow) {
            node1.next = { val: 1, next: null };
        }

        return head1;
    }

    // Find the longer list
    var head, node, prev;
    if (node1) {
        (head = head1), (node = node1);
    } else {
        (head = head2), (node = node2);
    }

    // Add the overflow
    while (node && overflow) {
        node.val += overflow;

        if (node.val >= 10) {
            node.val -= 10;
        } else {
            overflow = 0;
        }

        prev = node;
        node = node.next;
    }

    // Potentially add a final node
    if (overflow) {
        prev.next = { val: 1, next: null };
    }

    return head;
};
