// Linked list node
export default class MyNode {
    next: MyNode;
    prev: MyNode;
    val: any;

    constructor(val: any) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
