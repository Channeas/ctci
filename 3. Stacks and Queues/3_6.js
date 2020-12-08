const LLNode = require("./LLNode");
// Animal Shelter
module.exports = class Shelter {
    constructor() {
        this.oldest = null;
        this.newest = null;
    }

    // Method for adding an animal
    enqueue(data, type) {
        var animal = new Animal(data, type);

        if (this.newest) {
            this.newest.next = animal;
        } else {
            this.oldest = animal;
        }

        this.newest = animal;
    }

    // Method for retrieving any animal
    dequeue() {
        if (!this.oldest) {
            return null;
        }

        if (this.oldest == this.newest) {
            this.newest = null;
        }

        var animal = this.oldest;
        this.oldest = this.oldest.next;
        return animal.val;
    }

    // Method for retrieving a dog
    dequeueDog() {
        return this._findOldest("dog");
    }

    // Method for retrieving a cat
    dequeueCat() {
        return this._findOldest("cat");
    }

    // Method that finds the oldest animal of a type
    _findOldest(type) {
        // Make sure there is at least 1 animal
        if (!this.oldest) {
            return null;
        }

        // See if the first animal is the right type
        if (this.oldest.type == type) {
            if (this.oldest == this.newest) {
                this.newest = null;
            }

            var animal = this.oldest;
            this.oldest = this.oldest.next;

            return animal.val;
        }

        // Loop through the animals
        var prev = this.oldest;
        while (prev.next) {
            var animal = prev.next;

            // Check if this is the right type
            if (animal.type == type) {
                if (animal == this.newest) {
                    this.newest = prev;
                }

                prev.next = animal.next;
                return animal.val;
            }

            prev = animal;
        }

        return null;
    }
};

class Animal extends LLNode {
    constructor(data, type) {
        super(data);
        this.type = type;
    }
}
