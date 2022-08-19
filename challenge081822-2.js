// 7kyu - Convert an array of string to array of numbers

// P - array of strings
// R - array of numbers
// E - ["1.1","2.2","3.3"] --> [1.1,2.2,3.3]

const toNumberArray = stringarray => stringarray.map(e => Number(e))