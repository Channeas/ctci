// Function for finding the last node in a linked list
module.exports = function getLastNode(head) {
    var node = head;
    while (node.next) {
        node = node.next;
    }
    return node;
};
