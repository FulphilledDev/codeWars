// 8kyu - If you can't sleep, just count sheep!

// P - number 
// R - counted sheep
// E - countSheep(2) ==> '1 sheep...2 sheep...'

var countSheep = function (length) {
    return Array.from({ length }, (x, y) => ++y + ' sheep...').join('')
}