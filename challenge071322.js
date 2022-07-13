// 8-kyu Coonvert number to reversed array of digits

// P - 'n' array of digit(s)
// R - reversed array of digits
// E - [35231] --> [1, 3, 2, 5, 3]

// Create variable arrow function with parameter
const digitize = n => {
    //create variable for convert number to string
    let str = n.toString();
    //split and map to new array
    str = str.split("").map(Number);
    //reverse array
    str = str.reverse();

    return str
}