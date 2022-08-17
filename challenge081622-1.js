// 7kyu - Get key/value pairs

// P - Takes in an object
// R - keys and values as SEPARATE arrays
// E - ({a: 1, b: 2, c: 3}) --> [['a', 'b', 'c'], [1, 2, 3]]

const keysAndValues = data => [Object.keys(data), Object.values(data)]