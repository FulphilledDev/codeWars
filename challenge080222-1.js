// 7kyu - Highest and Lowest

// P - String of space separated numbers
// R - 2 numbers separated by a single space, with highest number first
// E - "1 2 3 4 5" --> "5 1"

function highAndLow(n) {
    // convert string into array
    const arr = n.split(" ");
    // convert string to a number
    let lowest = +arr[0];
    // convert highest to a number
    let highest = +arr[0];
    // loop through each n of arr
    for (let n of arr) {
        // if n is less than lowest, then replace with this n
        if (+n < lowest) lowest = +n;
        // if n is greate than highest, then replace with this n
        if (+n > highest) highest = +n;
    }
    // return in string format
    return `${highest} ${lowest}`
}