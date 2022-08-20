// 7kyu - Nice Array

// P - Array where for every value 'n', theres also an 'n -1' or 'n + 1' element in the array
// R - true else false
// E - [2,10,9,3] --> true; [3,4,5,7] --> false

// if length is not 0
// and every number in array has +1 or -1
const isNice = arr =>
    arr.length != 0 && arr.every(n => arr.some(e => e == (n + 1) || e == (n - 1)))