module.exports = function printList(head) {
    var node = head.next,
        result = `${head.val}`;
    while (node) {
        result += `->${node.val}`;
        node = node.next;
    }

    console.log(result);
};
