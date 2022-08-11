// 8kyu - TrainingJS #29: Methods of arrayObject --concat() and join()

// P - array
// R - descending order with separator ">"
// E - [[1,2],[3,4],[5,6]] --> "6>5>4>3>2>1"; [[1,3,5],[2,4,6]] --> "6>5>4>3>2>1"

// use '...arr' to take all elements of 'one dimensional arr' as parameters of concat...
// sort in descending order...
// join with separator '>'
const bigToSmall = arr => [].concat(...arr).sort((a, b) => b - a).join('>')