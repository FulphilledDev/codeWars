// 8kyu - CSV Representation of Array

// P - Array
// R - CSV Representation of 2-D numeric array (string)
// E -
// input:
// [[0, 1, 2, 3, 4],
//     [10, 11, 12, 13, 14],
//     [20, 21, 22, 23, 24],
//     [30, 31, 32, 33, 34]]

// output:
// '0,1,2,3,4\n'
//     + '10,11,12,13,14\n'
//     + '20,21,22,23,24\n'
//     + '30,31,32,33,34'

// Join array of arrays of numbers and escape n
const toCsvText = array => array.join('\n')