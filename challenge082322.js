// 8kyu - Training JS #18: concat() split() join()

// P - string, separator
// R - string of words split with separator and spaces in same position
// E - "Hello World!", "," ==> "H,e,l,l,o W,o,r,l,d,!"

const splitAndMerge = (str, sep) => str.split(' ').map(e => e.split('').join(sep)).join(' ')