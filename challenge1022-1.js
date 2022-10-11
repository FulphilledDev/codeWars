// 8kyu - String Cleaning

// P - String
// R - Filtered string without numbers, including all special characters
// E - ("A1 A1! AAA   3J4K5L@!!!") ==> "A A! AAA   JKL@!!!"

const stringClean = s => s.replace(/\d/g,'')

// Also written as...
// const stringClean = s => s.split('').filter((n) => n != parseInt(n)).join('');

