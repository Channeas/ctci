// Zero matrix
function zeroMatrix(matrix) {
    // Get coordinates of zeroes in the matrix
    const initialZeroes = getZeroPositions(matrix);

    // Loop through the zeroes, editing their rows and columns
    for (var zero of initialZeroes) {
        editRow(zero.row, matrix);
        editCol(zero.col, matrix);
    }

    return matrix;
}

function getZeroPositions(matrix) {
    // Look for zeroes in the matrix
    const positions = [];
    for (var rowIndex in matrix) {
        for (var colIndex in matrix[rowIndex]) {
            if (matrix[rowIndex][colIndex] == 0) {
                positions.push({ row: rowIndex, col: colIndex });
            }
        }
    }

    return positions;
}

function editRow(rowIndex, matrix) {
    // Set all the values in a row to 0
    for (var colIndex in matrix[rowIndex]) {
        matrix[rowIndex][colIndex] = 0;
    }
}

function editCol(colIndex, matrix) {
    // Set all the values in a column to 0
    for (var rowIndex in matrix) {
        matrix[rowIndex][colIndex] = 0;
    }
}

module.exports = zeroMatrix;
