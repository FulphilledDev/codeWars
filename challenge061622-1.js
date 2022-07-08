// 8 kyu - Keep Hydrated

// P - time (hours)
// R - litres needed to consume
// E - 2 --> 1; 0.82 --> 0; 11.8 --> 5

//Create function litres that takes in the parameter of hours
function litres(hours) {
    //Equation to solve for litres that rounds down
    return Math.floor(hours / 2)
}
