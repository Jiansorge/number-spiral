// JavaScript Coding Challenge
// Jian Sorge

// Exercise 1

// Evaluate a poker hand and determine its rank.
// Examples: Hand: Ah As 10c 7d 6s (Pair of Aces)
// Hand: Kh Kc 3s 3h 2d (2 Pair) 
// Hand: Kh Qh 6h 2h 9h (Flush)

function determineHandRank (str) {
    if (str.split(" ").length < 10){
        return console.log("Invalid hand.")
    }
    const cardOrder = ['A','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const suiteOptions = ['h','c','d','s'];

    function getCards(str){
        return str.split(" ").map(card => {
            return card[0]
        })
    };

    function isFlush(str){
        const suite = str[1];
        str.split(" ").map(card => {
            if (suite !== card[1]){
                return false
            }
        })
        return true
    };

    const cards = getCards(str);

    if (!cardOrder.includes(cards) || !suiteOptions.includes(suites)) {
        return console.log('Invalid hand.')
    }


    // Royal/straight flush: "(2345A|23456|34567|...|9TJQK|TJQKA)#(\\w)\\1{4}"
    // Four of a kind:       ".*(\\w)\\1{3}.*#.*"
    // Full house:           "((\\w)\\2\\2(\\w)\\3|(\\w)\\4(\\w)\\5\\5)#.*"
    // Flush:                ".*#(\\w)\\1{4}"
    // Straight:             "(2345A|23456|34567|...|9TJQK|TJQKA)#.*"
    // Three of a kind:      ".*(\\w)\\1\\1.*#.*"
    // Two pair:             ".*(\\w)\\1.*(\\w)\\2.*#.*"
    // One pair:             ".*(\\w)\\1.*#.*"
    // High card:            (none)


    const handNames = {
        "Royal Flush": {
            pattern: ,
            sameSuite: true,
            rank:1
        },
        "Straight Flush": {
            pattern: ,
            sameSuite: true,
            rank:2
        },
        "Four of a Kind": {
            pattern: /^\w{4}$/,
            rank:3
        },
        "Full House": {
            pattern: /^\w{3}\w{2}$/ || /^\w{2}\w{3}$/,
            rank:4
        },
        "Flush": {
            sameSuite: true,
            rank:5
        },
        "Straight": {
            pattern: ,
            rank:6
        },
        "Three of a Kind": {
            pattern: /^\w{3}$/,
            rank:7
        },
        "Two Pair": {
            pattern: /^\w{2}\w{2}$/,
            rank:8
        },
        "One Pair": {
            pattern: /^\w{2}$/,
            rank:9
        },
        "High Card": {
            pattern: ,
            rank:10
        }
    };
    
    function matchHand () {
        for (let hand in handNames){
            if (!!hand.suite && !!hand.pattern && isFlush(str) && hand.pattern.includes(cards)){
                return hand.key()
            }
            if (!!hand.suite && isFlush(str)){
                return hand.key()
            }
            if (!!hand.pattern && hand.pattern.includes(cards)){
                return hand.key()
            }
        }
    }
    return false;
};

const testHand1 = 'Ah As 10c 7d 6s';
const testHand2 = 'Kh Kc 3s 3h 2d';
const testHand3 = 'Kh Qh 6h 2h 9h';

console.log("test hand 1",determineHandRank(testHand1));
console.log("test hand 2",determineHandRank(testHand2));
console.log("test hand 3",determineHandRank(testHand3));


// Exercise 2

// Write some code that accepts an integer and prints, 
// fro`m 0 to that input integer, the integers in a spiral format.
// For example, if I supplied 24 the output would be:
// 20 21 22 23 24 
// 19 6  7  8  9 
// 18 5  0  1  10 
// 17 4  3  2  11 
// 16 15 14 13 12

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
    let startRow = midpoint;
    let endRow = rows - 1;
    let startColumn = midpoint;
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



// Exercise 3 
// ​Write some code that will accept a $ amount 
// and convert it to the appropriate string representation.
// Example: Convert $2523.04
// to "Two thousand five hundred twenty-three and 04/100 dollars"

function convertDollarToString (input) {
    let numberConversion = input
    if (typeof (number) === "Number") {
        numberConversion = numberConversion.toString()
    };
    if (numberConversion[0] === '$'){
        numberConversion.substring(1)
    };


    return;
};

const testDollar1 = 2523.04
const testDollar2 = 900.00;
const testDollar3 = 1111.9999;

console.log("test dollar 1",convertDollarToString(testDollar1));
console.log("test dollar 2",convertDollarToString(testDollar2));
console.log("test dollar 3",convertDollarToString(testDollar3));


// Exercise 4
// Write some code that can be used in a templating engine.
// This should take a map of variables ("day" => "Thursday", "name" => "Billy") 
// as well as a string template ("${name} has an appointment on ${day}") 
// and perform substitution as needed.
// TODO This needs to be somewhat robust, throwing some kind of error if a template 
// uses a variable that has not been assigned in the map, 
// as well as provide a way to escape the strings ("hello ${${name}}" -> "hello ${Billy}")

function createTemplateString (variableMap, stringTemplate) {
    return;
};

const testVariableMap1 = {
    'day':'Thursday',
    'name':'Billy'
};
const testTemplate1 = `${name} has an appointment on ${day}.`;

console.log(`created template string with`,createTemplateString(testVariableMap1,testTemplate1));


// Exercise 5
// Write some code that evolves generations through the "game of life".
// The input will be a game board of cells, either alive (1) or dead (0).
// The code should take this board and create a new board for the next generation based on the following rules:
// 0) A cell has up to eight neighbors (top, topright, right, bottomright, bottom, bottomleft, left, topleft) 
// 1) Any live cell with fewer than two live neighbours dies (under-population) 
// 2) Any live cell with two or three live neighbours lives on to the next generation (survival) 
// 3) Any live cell with more than three live neighbours dies (overcrowding) 
// 4) Any dead cell with exactly three live neighbours becomes a live cell (reproduction)
// As an example, this game board as input:
// 0100
// 0
// 1001
// 1
// 1100
// 1
// 0100
// 0
// 1000
// 1

// Will have a subsequent generation of:
// 0000
// 0
// 1011
// 1
// 1111
// 1
// 0100
// 0
// 0000
// 0