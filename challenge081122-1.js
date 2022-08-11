// 8kyu - Grasshopper - Array Mean

// P - Array of numbers
// R - Average (mean)
// E - 1, 3, 5, 7 --> 16/4 --> 4

const findAverage = nums => nums.reduce((a, b) => a + b, 0) / (nums.length)