// 7kyu - Merge Two Arrays

// P - 2 arrays
// R - combined arrays with alternation of values in respective order
// E - ([a, b, c, d, e], [1, 2, 3, 4, 5]) --> [a, 1, b, 2, c, 3, d, 4, e, 5]

const mergeArrays = (a, b) => {
    let arr = [];
    let largestArr = Math.max(a.length, b.length)
    for (let i = 0; i < largestArr; i++) {
        if (a[i]) { arr.push(a[i]) }
        if (b[i]) { arr.push(b[i]) }
    }
    return arr
}

// Without var 'largestArr'
// function mergeArrays(a, b) {
//     let answer = [];

//     for (i = 0; i < Math.max(a.length, b.length); i++) {
//         if (i < a.length) { answer.push(a[i]); }
//         if (i < b.length) { answer.push(b[i]); }
//     }

//     return answer; 
