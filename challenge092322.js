// 8kyu - Training JS #17: String - indexOf(), lasIndexOf(), search()

// P - str, c (string, character)
// R - gap between first position of c and last position of c, if none return -1, if 1 return 0, else return positive integer
// E - "ababc", "a" ==> 2

const firstToLast = (str, c) => str.indexOf(c) < 0 ? -1 : str.lastIndexOf(c) - str.indexOf(c)