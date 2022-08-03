// 7kyu - You're a Square

// P - number
// R - true if === square number, else false
// E - -1  =>  false; 0  => true; 3  => false; 26  => false

// if the square root of n has a remainder, it must equal 0 or its not a square 
const isSquare = n => Math.sqrt(n) % 1 == 0;