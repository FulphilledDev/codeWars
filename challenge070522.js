// 8kyu - Find Nearest Square Number

// P - Number
// R - Nearest Square Number
// E - 10 --> 9, 111 --> 121

const nearestSq = n => {
    //Find squareRoot of a number and round 
    return Math.pow(Math.round(Math.sqrt(n)), 2);
}