// URLify - replace spaces with %20

// Short (lazy) version
function URLify1(string) {
    // Remove additional spaces
    while (string.charAt(string.length - 1) == " ") {
        string = string.substring(0, string.length - 2);
    }

    return string.split(" ").join("%20");
}

// Essentially in-space version
function URLify2(string) {
    var chars = string.split("");
    var runoff = [];

    for (var index = 0; index < chars.length; index++) {
        // Check if we are on a space
        if (chars[index] == " ") {
            runoff.push("%", "2", "0");

            // Replace the space
            chars[index] = runoff.shift();
        } else if (runoff.length > 0) {
            runoff.push(chars[index]);
            chars[index] = runoff.shift();
        }
    }

    return chars.join("");
}

module.exports = { URLify1, URLify2 };
