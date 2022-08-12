// 7kyu - Sort array by string length

// P - array of strings
// R - sorted shortest to longest
// E - ["Beg", "Life", "I", "To"] --> ["I", "To", "Beg", "Life"]

const sortByLength = array => array.sort((a, b) => a.length - b.length)