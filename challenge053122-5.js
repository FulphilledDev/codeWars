// Grasshopper Summation

// P - Number
// R - Summation of every number and number
// E - 8 => 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 => 36

const summation = num => {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum
}