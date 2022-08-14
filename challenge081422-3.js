// 7kyu - Smallest Value of an array

// P - array, toReturn
// R - toReturn --> 'value' || 'index' of smallest value of array
// E - min([1,2,3,4,5], 'value') // => 1; min([1,2,3,4,5], 'index') // => 0

// add variable to parameters to represent minimum value of arr
// if toReturn is equal to 'value' return newly declared var (minArr)
// else return indexOf minArr
const min = (arr, toReturn, minArr = Math.min(...arr)) => toReturn === 'value' ? minArr : arr.indexOf(minArr);
