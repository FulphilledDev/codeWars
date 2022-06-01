// Sum of the first nth term of Series - 7kyu

// P = nth term
// R = sum of series up to nth term rounded to the 2nd decimal
// E = Series = [1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...]
// SeriesSum(3) => (1 + 1/4 + 1/7) => 1 + .25 + .39 => 1.64

function SeriesSum(n) {
    // Start sum at 0
    let sum = 0.00;
    // Start denominator at 1
    let denominator = 1;
    // Creat For Loop
    for (let i = 0; i < n; i += 1) {
        // If given 0 return 0
        if (i === 0) {
            sum = 1;
            // Denominator counter
        } else {
            denominator += 3;
            // Overall Formula
            sum = sum + (1 / denominator);
        }
    }
    return sum.toFixed(2)
}