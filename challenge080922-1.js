// 8kyu - Array plus array

// P - 2 arrays with integers
// R - total sum of arrays
// E - ([100, 200, 300], [400, 500, 600]) --> 2100

const arrayPlusArray = (a1, a2) => a1.reduce((a, b) => a + b, 0) + a2.reduce((a, b) => a + b, 0)

// Also coded as...
/*
const arrayPlusArray = (a1, a2) => {
  let newArr = a1.concat(a2)
  return newArr.reduce((a, b) => a + b, 0)
}
*/