// Remove String Spaces

// P - String
// R - String without spaces
// E - 'My name is Philip' => 'MynameisPhilip'

const noSpace = str => {
    // Split string into array of elements
    let newArr = str.split('');
    // Filter and trim newArr
    newArr = newArr.filter(e => e.trim().length)
    // Join array together
    newArr = newArr.join('');
    return newArr
}