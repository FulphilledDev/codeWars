// 7kyu - Maximum Triplet Sum

// P - array of integers
// R - maximum triplet sum WITHOUT duplications (means do NOT add duplicate numbers, if they are part of the biggest 3)
// E - ({3,2,6,8,2,3}) ==> return (17)

// spread syntax (...) to expand array into elements 
// new 'Set' to prevent duplication of values in array
// sort in ascending order
// slice off last 3
// reduce by addition

const maxTriSum = numbers =>
    [...new Set(numbers)].sort((a, b) => a - b).slice(-3).reduce((a, b) => a + b)