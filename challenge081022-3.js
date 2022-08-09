// 7kyu - Regex validate PIN code

// P - PIN code 
// R - true else false if PIN is equal to 4 or 6 digits
// E - "1234"  -->  true; "12345" --> false; "a234" --> false

// With Regex
const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin)

// Without Regex
const validateYourPIN = pin => {
    // pin length must be equal to 4 or 6 
    if (pin.length != 4 && pin.length != 6) {
        return false
    }
    // loop through pin for anything NOT a digit
    for (let i = 0; i < pin.length; i++) {
        if (pin[i] > '9' || pin[i] < '0') {
            return false
        }
    }
    // when both those functions have successfully cleared...
    return true
}

