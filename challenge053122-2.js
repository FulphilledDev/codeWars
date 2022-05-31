// Vowel Count

// P - A string with vowels
// R - Number of vowels in string
// E - "California" => 5

function getCount(str) {
    // Create vowels array
    let vowels = 'aeiou'.split('');
    // Split string and filter letters that are included in vowels array
    str = str.split('').filter(letter => vowels.includes(letter))


    return str.length;
}