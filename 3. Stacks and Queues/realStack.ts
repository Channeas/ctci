// Proper way to implement a stack
import MyNode from "./node";

export default class RealStack {
    private size: number = 0;
    private top: MyNode;
    constructor() {}

    // Method for adding items
    public push(item: any) {
        // Create a node
        var node = new MyNode(item);

        // Place it in the stack
        if (this.size == 0) {
            this.top = node;
        } else {
            // Set the ref to the second topmost node
            node.prev = this.top;

            // Set the ref from the second topmost node
            this.top.next = node;

            // Replace the node
            this.top = node;
        }

        this.size++;
    }

    // Method for retrieving the top item
    public get pop(): any {
        // Make sure the stack isn't empty
        if (this.top == null) {
            return null;
        }

        // Get the value to be retrieved
        var val = this.top.val;

        // Remove the topmost node
        this.top = this.top.prev;
        if (this.top != null) {
            this.top.next = null;
        }

        // Decrease the size of the stack
        this.size--;

        // Return the value
        return val;
    }

    // Method for retrieving but not removing items
    public get peek(): any {
        // Make sure the stack isn't empty
        if (this.top == null) {
            return null;
        }

        // Return the top value without altering the stack
        return this.top.val;
    }

    // Method for checking if the stack is empty
    public get isEmpty(): boolean {
        return this.size == 0;
    }

    // Method for retrieving the size of the staack
    public get getSize(): number {
        return this.size;
    }
}
