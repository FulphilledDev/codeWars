// 8kyu - Filling an Array (P1)

// P - empty array
// R - array with numbers 0 to N-1
// E - arr(5) --> [0,1,2,3,4]

// Array.from(arraylike, (element, index) => { /* ... */} )
// 'arraylike' represents N number of spaces in array where i can be placed
const arr = N => Array.from({ length: N }, (_, i) => i)