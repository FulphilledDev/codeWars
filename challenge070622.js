// 8kyu - If you can't sleep, just count sheep!

// P - number 
// R - counted sheep
// E - countSheep(2) ==> '1 sheep...2 sheep...'

const countSheep = num => {
    let countedSheep =`${num} sheep...`
    return countedSheep.padEnd(num, `${num} sheep...`)
}