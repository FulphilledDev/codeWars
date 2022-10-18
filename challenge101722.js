// 8kyu - Double Char

// P - string
// R - Double every character in string
// E - "abcd" --> "aabbccdd"

function doubleChar(str) {
  return str.split('').map(e => e+e).join('')
}