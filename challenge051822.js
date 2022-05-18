// Return Negative

// P - Number
// R - Negative Number
// E - makeNegative(1) => -1

function makeNegative(n) {
    return n < 0 ? n : -n;
}

// Also written as :
// const makeNegative = n => -Math.abs(n)