// Rotate matrix - rotate an N * N matrix 90 degrees clockwise
function rotate(matrix) {
    // Swap values diagonally
    swapValues(matrix);

    // Reverse the rows
    reverseRows(matrix);

    return matrix;
}

function swapValues(matrix) {
    for (var rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        for (
            var colIndex = rowIndex + 1;
            colIndex < matrix.length;
            colIndex++
        ) {
            // Swap values diagonally
            var temp = matrix[rowIndex][colIndex];
            matrix[rowIndex][colIndex] = matrix[colIndex][rowIndex];
            matrix[colIndex][rowIndex] = temp;
        }
    }
}

function reverseRows(matrix) {
    // Loop through the rows, reversing them
    for (var row of matrix) {
        reverseArray(row);
    }
}

function reverseArray(array) {
    for (var index = 0; index < array.length / 2; index++) {
        var index2 = array.length - index - 1,
            temp = array[index];
        array[index] = array[index2];
        array[index2] = temp;
    }
}

module.exports = rotate;
