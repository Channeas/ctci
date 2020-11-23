// String rotation - figure out if s2 is a rotation of s1 using only one call to isSubstring()
// NOTE TO SELF: Made this WAY to complicated, but it works at least lol
function isRotation(s1, s2) {
    // Make sure the strings are the same length
    if (s1.length != s2.length) {
        return false;
    }

    // Find the point of rotation
    const rotationIndex = findRotation(s1, s2);
    if (rotationIndex == -1) {
        return false;
    }

    // Rotate back the string
    const original =
        s2.substring(rotationIndex, s2.length) + s2.substring(0, rotationIndex);

    return isSubstring(s1, original);
}

function findRotation(s1, s2) {
    var rotationPoint = -1,
        index1 = 0;

    // Iterate through the potentially rotated string, looking for where it matches with the first string
    for (var index2 = 0; index2 < s2.length; index2++) {
        if (s1.charAt(index1) == s2.charAt(index2)) {
            // Potentially save the second index as teh rotation point
            if (rotationPoint == -1) {
                rotationPoint = index2;
            }
            index1++;
        } else {
            rotationPoint = -1;
            index1 = 0;
        }
    }

    return rotationPoint;
}

module.exports = isRotation;

// Note: This function should exist already, and check for substrings
// I just check if the strings are the same however
function isSubstring(s1, s2) {
    return s1 == s2;
}
