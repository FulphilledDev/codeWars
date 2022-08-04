// 8kyu - Get the mean of an array

// P - array of marks
// R - average rounded down
// E - ([2,2,2,2]) --> 2; ([1,2,3,4,5,]) --> 3

// Reduce the array of marks, divide by the number of marks, and round it all to the 'floor'
const getAverage = marks => Math.floor(marks.reduce((p, c) => p + c) / marks.length)