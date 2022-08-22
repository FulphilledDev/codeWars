// 7kyu - Array element parity

// P - array of integers
// R - opposite value of integer missing a pair
// E - [-3, 1, 2, 3, -1, -4, -2] => -4

const solve = arr => {
    let opposite = [];
    for (let i = 0; i < arr.length; i++) {
        if (!arr.includes(-1 * arr[i])) {
            opposite.push(arr[i])
        }
    }
    return opposite[0]
}

// With '.find' and '.includes'
// const solve = a => a.find(e => !a.includes(-e));