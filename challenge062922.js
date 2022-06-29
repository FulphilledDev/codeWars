// 8kyu - Removing Elements

// P - array of strings
// R - element without odd indexes
// E - ['Hello', 'Goodbye', 'Hello Again'] --> ['Hello', 'Hello Again']

const removeEveryOther = (arr) => arr.filter((_, i) => i % 2 == 0)