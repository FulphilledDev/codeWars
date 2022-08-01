// 8kyu - Simple Multiplication

// P - n
// R - if even --> n*8; else --> n*9
// E - (2) --> 16; (1) --> 9;

// If n modulo 2 is equal to 0, multiply by 8, else multiply by 9
const simpleMultiplication = n => n % 2 === 0 ? n * 8 : n * 9;
