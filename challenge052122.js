// Remove First and Last Character

// P - String
// R - String without first and last character
// E - 'chai' => 'ha'

const twoLessChar = str => {
    str = str.split('');
    str.shift();
    str.pop();
    return str.join('');
}

// Also written as
// const removeChar = str => str.slice(1, -1)