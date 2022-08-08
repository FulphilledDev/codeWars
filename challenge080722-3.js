// 8kyu - Total amount of points

// P - array of point counts for each match
// R - total points
// E - ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) --> 30

const points = games => {
    // reduce the array of games by adding to a total with an initial value of 0, as long as x > y or else x == y
    return games.reduce((t, [x, _, y]) => t + (x > y ? 3 : x == y), 0)
}