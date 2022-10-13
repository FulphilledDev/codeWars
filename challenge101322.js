// 8kyu - Training JS #14 - Methods of Number Object

// P - r,g,b
// R - hexidecimal value using toString(16)
// E - (0, 111, 0) => "006f00"

const colorOf = (r,g,b) => `#${[r,g,b].map(e => e.toString(16).padStart(2, 0)).join('')}`
