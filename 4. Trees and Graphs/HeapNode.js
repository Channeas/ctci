import BTNode from "./BTNode.js";
// Node used in heap (contains a reference to the parent node)
export default class HeapNode extends BTNode {
    constructor(val, parent) {
        super(val);
        this.parent = parent;
    }
}
