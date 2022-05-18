// Convert a Boolean to a String

// P - Boolean Conditional : T/F
// R - String => "True"/"False"
// E - NA

// 1st Attempt
const booleanToString = b => b === b ? "true" : "false"; // Expected 'true' to equal 'false'

// 2nd Attempt
function booleanToString(b) {
    if (b) {
        return 'true'
    } else if (b !== b) {
        return 'false'
    }
} // Expected undefined to equal 'false'

// 3rd Attempt
const booleanToString = b => b.toString(); // Passed

// The 1st attempt would have been correctly written as:
const booleanToString = b => b ? 'true' : 'false';

// A unique solution I found and like is:
const booleanToString = b => `${b}`;