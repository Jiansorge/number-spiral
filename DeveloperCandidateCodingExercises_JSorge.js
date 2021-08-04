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
    if (n % 1 !== 0){
        return console.log('Input must be an integer');
    };
    const isSquare = (number) => {
        return number > 0 && Math.sqrt(number) % 1 === 0;
    };
    if (!isSquare(n-1)){
        return console.log('Input must be a square number minus 1.');
    };
    const rows = Math.sqrt(number);
    const midpoint = Math.floor(rows/2);

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
    let endRow = rows - 1;
    let startColumn = midpoint - 1;
    let endColumn = rows - 1;

    while (startColumn <= endColumn && startRow <= endRow){
        // top
        for (let i = startColumn; i <= endColumn; i++){
            matrix[startRow][i] = counter;
            counter++;
        }
        startRow++;

        // right
        for (let i = startRow; i <= endRow; i++){
            matrix[i][endColumn] = counter;
            counter++;
        }
        endColumn--;

        // bottom
        for (let i = endColumn; i <= startColumn; i--){
            matrix[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // left    
        for (let i = endRow; i <= startRow; i--){
            matrix[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    };
    

    return matrix;
};

const testInt1 = 24;
const testInt2 = 19;
const testInt3 = 13;

console.log("test int 1",printIntegerSpiral(testInt1));
console.log("test int 2",printIntegerSpiral(testInt2));
console.log("test int 3",printIntegerSpiral(testInt3));
