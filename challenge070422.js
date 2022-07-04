// 8kyu - Transportation on Vacation

// P - Days to rent car
// R - Total amount for days
// E - rentalCarCost(4) ==> 140

const rentalCarCost = d => {
    if (d < 3) {
        return d * 40
    } else if ( d >= 3 && d < 7) {
        return ((d * 40) - 20)
    } else if ( d >= 7 ) {
        return ((d * 40) - 50)
    }
}

// Best organized as...
// const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));