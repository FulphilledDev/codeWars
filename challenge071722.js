// 8kyu - Count of positives / sum of negatives

// P - array of integers
// R - array with firstCountPositive and second count negative
// E - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] --> [10, -65]

function countPositivesSumNegatives(input) {
    // Conditional
    if (input && input.length) {
        // Variables for positive and negative totals
        let count = 0;
        let sum = 0;
        // Conditional for each element greater than 0, else...
        input.forEach(num => num > 0 ? count++ : sum += num)
        // Return as array
        return [count, sum]
    } else {
        return []
    }
}