// Multiples of 3 or 5 - 6kyu

// P - Integer
// R - Sum of Multiples of 3 or 5 LESS THAN integer
// E - 10 => 3, 5, 6, 9 = 23

function solution(n) {
    // Make empty array
    let multiplesArr = [];
    // Make for loop
    for (let i = 3; i < n; i++) {
        // Make conditional to add divisible numbers to multiplesArr
        if (i % 3 === 0 || i % 5 === 0) {
            multiplesArr.push(i)
        }
    }
    //Return sum of integers in multiplesArr 
    return multiplesArr.reduce((acc, curr) => acc + curr, 0);
}