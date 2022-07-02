// 8kyu - Training JS #12: Loop Statement -- For...in and for...of

// P - object
// R - every key equal to length of 5 push to array; every value equal to 5 push to value array
// E - {Our:"earth",is:"a",beautyful:"world"} ==> ["earth","world"]

const giveMeFive = obj => /*for( in )*/[].concat(...Object.entries(obj)).filter(e => e.length == 5)