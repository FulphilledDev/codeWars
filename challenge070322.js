// 8kyu - Do I Get a Bonus?

// P - salary, bonus
// R - if bonus === true return salary * 10, else salary
// E - 25000, true ==> £250000

const bonusTime = (salary, bonus) => {
    
    bonus === true ? `£${salary*10}` : `£${salary}`
}