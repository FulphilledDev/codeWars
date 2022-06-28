// 8kyu - Will there be enough space?

// P - cap, on, wait
// R - If enough space return 0, else return the number of passengers can't take
// E - 100, 60, 50 --> 10

const enough = (cap, on, wait) => cap >= on + wait ? 0 : Math.abs(cap - (on + wait))