// 8kyu - Will you make it?

// P - distanceToPump, mpg, fuelLeft
// R - True else false
// E - (50, 25, 2) --> true; (100, 50, 1) --> false

// Is the distance less than or equal to mpg multiplied by fuel left? If so true, else false
const zeroFuel = (dToPump, mpg, fLeft) => dToPump <= mpg * fLeft ? true : false;