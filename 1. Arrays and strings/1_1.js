// Is unique - check if all characters in a string are unique
function isUnique(string) {
    const hash = new Map();

    for (var index = 0; index < string.length; index++) {
        if (hash.has(string.charAt(index))) {
            return false;
        }

        hash.set(string.charAt(index), true);
    }

    return true;
}

module.exports = isUnique;
