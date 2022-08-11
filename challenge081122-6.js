// 8kyu - Be Concise IV - Index of an element in an array

// P - array, element
// R - index of element IF found, ELSE "Not found"
// E - 1) array = [2,3,5,7,11]: find(array, 7) --> 3
// E - 2) array = [true, "Hello World", false, "Lorem Ipsum", 6, Math.PI]: find(array, "lorem ipsum") --> "Not found"

const find = (arr, e) => arr = arr.indexOf(e) >= 0 ? arr.indexOf(e) : "Not found";

// Shortest coded as...
// const find = (a, x) => (x = a.indexOf(x)) < 0 ? 'Not found' : x

// Other...
// const find = (a, e) => a.includes(e) ? a.indexOf(e) : "Not found";