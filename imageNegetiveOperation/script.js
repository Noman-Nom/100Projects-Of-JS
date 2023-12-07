function initializeMatrix(tableId, rows, cols) {
    const table = document.getElementById(tableId);
    for (let i = 0; i < rows; i++) {
        const row = table.insertRow(i);
        for (let j = 0; j < cols; j++) {
            const cell = row.insertCell(j);
            const input = document.createElement('input');
            input.type = 'number';
            input.min = '0';
            input.max = '15';
            input.value = '0';
            cell.appendChild(input);
        }
    }
}

function calculateNegative() {
    // Get the values from the input matrix
    const inputMatrix = getMatrixValues('matrix');

    // Calculate the image negative for each element in the matrix
    const resultMatrix = inputMatrix.map(row => row.map(value => 15 - value));

    // Display the result matrix
    displayMatrix('resultMatrix', resultMatrix);
}

function getMatrixValues(tableId) {
    const table = document.getElementById(tableId);
    const values = [];

    for (let i = 0; i < table.rows.length; i++) {
        values[i] = [];
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            const input = table.rows[i].cells[j].querySelector('input');
            values[i][j] = parseInt(input.value);
        }
    }

    return values;
}

function displayMatrix(tableId, matrix) {
    const table = document.getElementById(tableId);

    // Clear previous content
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }

    // Populate the table with the new matrix
    for (let i = 0; i < matrix.length; i++) {
        const row = table.insertRow(i);
        for (let j = 0; j < matrix[i].length; j++) {
            const cell = row.insertCell(j);
            cell.appendChild(document.createTextNode(matrix[i][j]));
        }
    }
}

// Initialize the input matrix
initializeMatrix('matrix', 4, 4);
