// 8kyu - How good are you really?

// P - array of scores, and my score
// R - average and if my score is higher ? true : false
// E - ([100, 40, 34, 57, 29, 72, 57, 88], 75) --> true

const betterThanAverage = (classPoints, myPoints) => {
    const sumClassPoints = classPoints.reduce((prev, current) => prev + current, 0)
    return myPoints > (sumClassPoints / classPoints.length) ? true : false;
}