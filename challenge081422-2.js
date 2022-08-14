// 7kyu - Currying functions: Multiply all elements in an array

// P - function multiplyAll that takes in array of integers
// R - another function that takes a single integer as an argument and returns a new array...
// E - ([1, 2, 3](2)) --> [2, 4, 6]

// declare function multiplyAll that takes in arr
const multiplyAll = arr => {
    // return a function that takes in a single integer as an argument
    return function (integer) {
        // return a new array that is result of "arr" and "integer"
        return arr.map(num => num * integer)
    }
}