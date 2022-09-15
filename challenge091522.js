// 8kyu - Training JS #16: String - .slice(), .substring(), .substr()

// P - arr (string array)
// R - find shortest string length, and intercept all strings TO shortest string length
// E - ["ab","cde","fgh"] ==> ["ab","cd","fg"]

const cutIt = arr => arr.map(e => e.slice(0, Math.min(...arr.map(e => e.length))))