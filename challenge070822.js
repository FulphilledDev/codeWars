// 8kyu - Basic Mathematical Operations

// P - Operator, v1, v2
// R - Result of values based on operator
// E - ('+', 4, 7) --> 11

function basicOp(op, v1, v2) {
    // Addition
    if (op === '+') {
        return v1 + v2;
        // Subtraction
    } else if (op === '-') {
        return v1 - v2;
        // Multiplication
    } else if (op === '*') {
        return v1 * v2;
        // Division
    } else if (op === '/') {
        return v1 / v2;
    }
}