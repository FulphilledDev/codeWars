// 7kyu - Testing 1-2-3

// P - List of strings
// R - Each line prepended by correct number in format 'n: string'
// E - ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

const number = arr => {
    // declaring variable of empty array
    let result = [];
    // array with a length of 0 returns empty array
    if (arr.length === 0) {
        return [];
    } else {
        // loop through array input and push to result array declared above
        for (let i = 0; i < arr.length; i++) {
            result.push(i + 1 + ': ' + arr[i])
        }
    }
    return result
}

// can also write as map with template literals to save lines of code...
// const n = arr => arr.map((e, i) => `${i + 1}: ${e}`)