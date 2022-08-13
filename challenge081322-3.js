// 7kyu - Largest pair sum in array

// P - array of numbers
// R - largest pair sum in array
// E - [10, 14, 2, 23, 19] -->  42 (= 23 + 19)

function largestPairSum(numbers) {
    // sort in ascending order, take the last 2 numbers, add them together
    return numbers.sort((a, b) => a - b).slice(-2).reduce((a, b) => a + b, 0)
}