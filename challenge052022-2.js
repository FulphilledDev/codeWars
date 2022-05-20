// Sum without Highest and Lowest Number

// P - Array of Numbers
// R - Sum of array WITHOUT highest and lowest numbers
// E - [6, 2, 1, 8, 10] => 16

const sumArray = (n) => (
    n && n.length > 1
        ? n
            .sort((a, b) => a - b)
            .slice(1, -1)
            .reduce((sum, n) => sum + n, 0)
        : 0
)
