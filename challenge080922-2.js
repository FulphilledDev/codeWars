// 8kyu - Sum Mixed Array

// P - Array of integers as strings and numbers
// R - Sum of array values as one NUMBER
// E - ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'] --> 41

// a = 'prev'
// b = 'curr' with unary plus operatory converts string into number
const sumMix = x => x.reduce((a, b) => +b + a, 0)