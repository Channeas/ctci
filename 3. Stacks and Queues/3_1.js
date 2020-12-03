// Three In One
// 3 variables for the length, 1 for the middle index
// [S1 -> | S2 -> | <- S3]
//          ^
//          midIndex
module.exports = class TrippleStack {
    constructor() {
        this._s1Length = 0;
        this._s2Length = 0;
        this._s3Length = 0;
        this._midIndex = 0;
        this._store = [];
    }

    // First stack
    s1Push(item) {
        this._s1Length++;
        this._midIndex++;
        this._store.unshift(item);
    }

    s1Peek() {
        if (this._s1Length == 0) {
            return undefined;
        }

        return this._store[0];
    }

    s1Pop() {
        if (this._s1Length == 0) {
            return undefined;
        }

        this._s1Length--;
        this._midIndex--;
        return this._store.shift();
    }

    // Second stack
    s2Push(item) {
        this._s2Length++;
        this._store.splice(this._midIndex, 0, item);
    }

    s2Peek() {
        if (this._s2Length == 0) {
            return undefined;
        }

        return this._store[this._midIndex];
    }

    s2Pop() {
        if (this._s2Length == 0) {
            return undefined;
        }

        this._s2Length--;
        return this._store.splice(this._midIndex, 1)[0];
    }

    // Third stack
    s3Push(item) {
        this._s3Length++;
        this._store.push(item);
    }

    s3Peek() {
        if (this._s3Length == 0) {
            return undefined;
        }

        return this._store[this._store.length - 1];
    }

    s3Pop() {
        if (this._s3Length == 0) {
            return undefined;
        }

        this._s3Length--;
        return this._store.pop();
    }
};
