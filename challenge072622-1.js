// 8kyu - Fake Binary

// P - String of digits (array)
// R - Digits < 5 => '0', and > 5 => '1' --> resultString
// E - fakeBin('45385593107843568') --> ('01011110001100111')

function fakeBin(x) {
    // split into separate objects --> map with conditional --> join back to one big blaw
    return x.split('').map(y => y < 5 ? 0 : 1).join('')
}