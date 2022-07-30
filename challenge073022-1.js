// 8kyu - Calculate Average

// P - Array of numbers
// R - Average of numbers in array
// E - [1,1,1] --> 1 ; [1,2,3,4] --> 2.5

// Is arr length equal to 0? 
// If so, return 0
// If not, add previous to current and divide by array length
const find_average = arr => arr.length == 0 ? 0 : arr.reduce((a, b) => a + b) / arr.length;