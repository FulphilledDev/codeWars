// 8kyu - Count the Monkeys

// P - n
// R - array 1 to n
// E - 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const monkeyCount = n => {
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
  return arr
}