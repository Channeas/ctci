// Linked List Palindrome
module.exports = function isPalindrome(head) {
    var chars = "",
        reversedChars = "",
        node = head;

    // Iterate through the list
    while (node) {
        chars += node.val;
        reversedChars = node.val + reversedChars;
        node = node.next;
    }

    // Return a comparison of the strings
    return chars == reversedChars;
};
