// 8kyu - Get Number from String

// P - string
// R - only digits
// E - "hell5o wor6ld" ==> 56

const getNumberFromString = s => +s.replace(/\D/g, '')