// JavaScript Coding Challenge
// Jian Sorge

// Exercise 2

// Write some code that accepts an integer and prints, 
// from 0 to that input integer, the integers in a spiral format.
// For example, if I supplied 24 the output would be:
// 20 21 22 23 24 
// 19 6  7  8  9 
// 18 5  0  1  10 
// 17 4  3  2  11 
// 16 15 14 13 12

// 6 7  8   9
// 5 0  1  10
// 4 3  2  11
//15 14 13 12

function printIntegerSpiral (n) {
    n++;
    if (n === 0){
        console.log([])
        return []
    }
    if (n === 1){
        return [0]
    }
    if (n % 1 !== 0 || typeof (n) !== 'number'){
        return console.log('Input must be an integer');
    };
    const isSquare = (number) => {
        return number >= 0 && Math.sqrt(number) % 1 === 0;
    };
    if (!isSquare(n)){
        return console.log('Input must be a square number minus 1.');
    };
    const rows = Math.sqrt(n);
    const midpoint = Math.ceil(rows/2);

    const matrix = [];
    // create 2D empty matrix 
    for (let rowIndex = 0; rowIndex < rows; rowIndex++){
        matrix.push([]);
        for (let columnIndex = 0; columnIndex < rows; columnIndex++){
            matrix[rowIndex].push([]);
        };
    }
    let counter = 0;
    // start in middle if odd
    // start in top left cell of central 2x2 if even
    let startRow = midpoint - 1;
    let endRow = startRow + 1;
    let startColumn = midpoint - 1;
    let endColumn = startColumn + 1;

    while (counter < n+1){
        //  left to right
        for (let i = startColumn; i < endColumn; i++){
            matrix[startRow][i] = counter;
            counter++;
        }
        if (counter >= n - 1) {
             break;
        }
        startColumn--;

        // top to bottom
        for (let i = startRow; i < endRow ; i++){
            matrix[i][endColumn] = counter;
            counter++;
        }
        startRow--;

        for (let i = endColumn; i > startColumn ; i--){
            matrix[endRow][i] = counter;
            counter++;
        }
        endColumn++;
        if (counter >= n - 1) {
            break;
        }

        // bottom to top    
        for (let i = endRow; i > startRow ; i--){
            matrix[i][startColumn] = counter;
            counter++;
        }
        endRow++;
    };
    
    console.log(matrix);
    return matrix
};
