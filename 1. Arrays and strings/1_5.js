function oneAway(string1, string2) {
    // Make sure the lengths match
    var l1 = string1.length,
        l2 = string2.length;
    if (l1 < l2 - 1 || l1 > l2 + 1) {
        return false;
    }

    const charCount = countChars(string1);

    // Determine how many discrepencies there are between the strings
    var discrepencies = 0;
    for (var index = 0; index < string2.length; index++) {
        var char = string2[index];

        // See if the character exists in the hash map
        if (charCount.has(char)) {
            // Decrease the char count
            charCount.set(char, charCount.get(char) - 1);

            // See if this was the last char of this type
            if (charCount.get(char) < 1) {
                charCount.delete(char);
            }
        } else {
            discrepencies++;
        }
    }

    // Add remaining discrepencies
    for (var key in charCount) {
        discrepencies++;
    }

    return discrepencies < 2;
}

function countChars(string) {
    const hash = new Map();

    for (var index = 0; index < string.length; index++) {
        var char = string[index];

        if (hash.has(char)) {
            hash.set(char, hash.get(char) + 1);
        } else {
            hash.set(char, 1);
        }
    }

    return hash;
}

module.exports = oneAway;
