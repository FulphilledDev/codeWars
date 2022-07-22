// 6kyu - Create Phone Number

// P - Array of 10 integers between 0 and 9
// R - String in the form of a phone number
// E - createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns  (123) 456-7890"


function createPhoneNumber(numbers) {
    // set up string
    phoneNumber = '(xxx) xxx-xxxx';
    // loop through replacing string
    numbers.forEach(number => phoneNumber = phoneNumber.replace('x', number));
    // return answer
    return phoneNumber
} 