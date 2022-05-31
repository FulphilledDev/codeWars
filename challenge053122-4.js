// Square Every Digit

// P - Take in a number
// R - A new number that is each digit of the number squared
// E - 9119 => 811181


function squareDigits(num) {
    // Return a numbers that concatenate
    return Number(('' + num)
        // Split the number into individual digits that return a new array
        .split('')
        // Square the numbers of that array
        .map(function (n) {
            return n * n
        })
        // Join the numbers into one large string
        .join(''));
}

