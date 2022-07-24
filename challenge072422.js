// 8kyu - Find the first non-consecutive number

// P - arr of digits
// R - first non-consecutive number, else return null
// E - [1,2,3,4,6,7,8] --> 6

function firstNonConsecutive (arr) {
    let fnc = arr.find((a, b) => a !== b + arr[0])
    return Number.isInteger(fnc) ? fnc : null
}