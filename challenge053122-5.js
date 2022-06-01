// Grasshopper Summation

// P - Number
// R - Summation of every number and number
// E - 8 => 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 => 36

const summation = num => {
    // Declare a new var representing starting sum = 0
    let sum = 0;
    // For Loop for each digit up to num
    for (let i = 0; i <= num; i++) {
        // Summation formula
        sum += i;
    }
    return sum
}