// String Compression - Compress a string by replacing duplicate characters
function compress(string) {
    var array = string.split("");
    var count = 1;

    for (var index = 1; index < array.length; index++) {
        // Check if this is the same character as the previous one
        if (array[index] == array[index - 1]) {
            // If it is, remove the character, and increment the count
            array.splice(index, 1);
            count++;
            index--;
        } else {
            // If not, append the previous count and start a new one
            array.splice(index, 0, count);
            count = 1;
            index++;
        }
    }

    // Add the remaining count
    array.push(count);

    // Determine whether the original string or the compressed one is shorter
    if (string.length <= array.length) {
        return string;
    }
    return array.join("");
}

module.exports = compress;
