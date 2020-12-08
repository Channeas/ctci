const Shelter = require("./3_6");

// Test getting from an empty shelter
test("Testing empty shelter", () => {
    let shelter = new Shelter();

    expect(shelter.dequeue()).toBe(null);
    expect(shelter.dequeueCat()).toBe(null);
    expect(shelter.dequeueDog()).toBe(null);
});

// Test getting from an empty shelter
test("Trying to retrieve a dog from a shelter with no dogs", () => {
    let shelter = new Shelter();

    // Add a few cats
    shelter.enqueue({ name: "Elon" }, "cat");
    shelter.enqueue({ name: "Bill" }, "cat");
    shelter.enqueue({ name: "Phil" }, "cat");

    expect(shelter.dequeueDog()).toBe(null);
});

// Test retrieving the start
test("Retrieving the first animal", () => {
    let shelter = new Shelter();

    // Add a few cats
    shelter.enqueue({ name: "Elon" }, "cat");
    shelter.enqueue({ name: "Bill" }, "cat");
    shelter.enqueue({ name: "Phil" }, "cat");

    expect(shelter.dequeue().name).toBe("Elon");
    expect(shelter.dequeue().name).toBe("Bill");
    expect(shelter.dequeue().name).toBe("Phil");
});

// Test retrieving from the middle
test("Retrieving a dog in the middle of cats", () => {
    let shelter = new Shelter();

    // Add a few cats
    shelter.enqueue({ name: "Elon" }, "cat");
    shelter.enqueue({ name: "Bill" }, "cat");
    shelter.enqueue({ name: "Phil" }, "cat");

    // Add a dog
    shelter.enqueue({ name: "Puppy" }, "dog");

    // Add another cat
    shelter.enqueue({ name: "Alex" }, "cat");

    // Retrieve a cat
    shelter.dequeue();

    expect(shelter.dequeueDog().name).toBe("Puppy");
});

// Test retrieving the last
test("Retrieving a dog in last animal", () => {
    let shelter = new Shelter();

    // Add a few cats
    shelter.enqueue({ name: "Elon" }, "cat");
    shelter.enqueue({ name: "Bill" }, "cat");
    shelter.enqueue({ name: "Phil" }, "cat");

    // Add two dog
    shelter.enqueue({ name: "Puppy" }, "dog");
    shelter.enqueue({ name: "Steve" }, "dog");

    // Retrieve a cat
    shelter.dequeue();

    expect(shelter.dequeueDog().name).toBe("Puppy");
    expect(shelter.dequeueDog().name).toBe("Steve");
});

// Test emtpying
test("Emptying and then filling a shelter", () => {
    let shelter = new Shelter();

    // Add a few cats
    shelter.enqueue({ name: "Elon" }, "cat");
    shelter.enqueue({ name: "Carl" }, "cat");
    shelter.enqueue({ name: "Bill" }, "cat");

    // Empty the shelter
    expect(shelter.dequeueCat().name).toBe("Elon");
    expect(shelter.dequeueCat().name).toBe("Carl");
    expect(shelter.dequeue().name).toBe("Bill");
    expect(shelter.dequeue()).toBe(null);

    // Add some new cats
    shelter.enqueue({ name: "Phil" }, "cat");
    shelter.enqueue({ name: "Alex" }, "cat");

    // Empty the shelter once more
    expect(shelter.dequeue().name).toBe("Phil");
    expect(shelter.dequeueCat().name).toBe("Alex");
    expect(shelter.dequeue()).toBe(null);
});
