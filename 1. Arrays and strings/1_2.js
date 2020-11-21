function isPermutation(string1, string2) {
    if (string1.length != string2.length) {
        return false;
    }

    const hash = new Map();

    // Loop through the first string, storing the characters
    for (let index = 0; index < string1.length; index++) {
        let char = string1.charAt(index);
        let exists = hash.get(char);

        // Either register a letter or increment it's count
        if (exists) {
            hash.set(char, exists + 1);
        } else {
            hash.set(char, 1);
        }
    }

    // Loop through the second string, checking that the characters exist in the same amount
    for (let index = 0; index < string2.length; index++) {
        // Get the character and it's number of appearances in the first string
        let char = string2.charAt(index);
        let exists = hash.get(char);

        // If the letter doesn't exist or has already been used, return false
        if (!exists || exists < 1) {
            return false;
        } else {
            hash.set(char, exists - 1);
        }
    }

    return true;
}

module.exports = isPermutation;
