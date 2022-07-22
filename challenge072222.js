// 8kyu - Beginner Series #1 School Paperwork

// P - number of classmates and pages
// R - n * m , else if n<0 OR m<0 return 0
// E - n= 5, m=5: 25 | n = -5, m = 5: 0


// Variable and parameters
const paperwork = (n, m) => {
    // Condition and expressions
    return (n > 0 && m > 0) ? n * m : 0;
}
