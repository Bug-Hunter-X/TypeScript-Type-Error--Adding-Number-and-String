function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2); // Correct: both arguments are numbers

let result2 = add(1, parseInt('2')); // Correct: string '2' is parsed to number 2

let result3 = add(1, Number('2')); // Correct: string '2' is converted to number 2

// Handle potential errors when parsing strings
function addSafe(a: number, b: string): number {
    const numB = parseFloat(b);
    if (isNaN(numB)) {
        return a; // or throw an error: throw new Error('Invalid input');
    }
    return a + numB;
}
let result4 = addSafe(1, '2'); // Correct: handles potential errors
let result5 = addSafe(1, 'abc'); // Correct: handles non-numeric strings