// Check if a string is a permutation of a palindrome
// - Ignore casing and non-letter characters
function palindromePermutation(string) {
    // Count how many times each character appears
    const charCounts = countCharacters(string);

    // Check if there is more than one odd character
    var containsOdd = false;
    for (var key of charCounts) {
        // Check if the current character appeared an odd amount of times
        if (key[1] % 2 == 1) {
            // Return false if this is the second odd character
            if (containsOdd) {
                return false;
            }
            containsOdd = true;
        }
    }

    return true;
}

// Function that counts how many times a character appears, saved in a hashmap
function countCharacters(string) {
    const hash = new Map();
    for (var index = 0; index < string.length; index++) {
        var char = string[index].toLowerCase();

        // Make sure the character is a letter
        if (!/^[a-z]/.test(char)) {
            continue;
        }

        if (hash.has(char)) {
            hash.set(char, hash.get(char) + 1);
        } else {
            hash.set(char, 1);
        }
    }

    return hash;
}

module.exports = palindromePermutation;
