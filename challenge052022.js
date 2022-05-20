// Repeat String

// P - Number, String
// R - Repeated String Number times
// E - repeatString(3, 'abc') => 'abcabcabc'

const repeatStr = (n, s) => s.repeat(n);

// Also written as:
// let repeatStr = (n, s) => `${s.repeat(n)}`

// function repeatStr (n,s) {
    //let repeated = '';
    //while(n > 0) {
    //    repeated += s;
    //    n--;
    //}
    //return repeated;
//}