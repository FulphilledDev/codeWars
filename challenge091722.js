// 8kyu - Training JS #10: Loop Statement -- for

// P - array
// R - if element is odd number push to odd array, if even push to even array
// E - [8,1,5,4,6,1,1] ==> [[1,5,1,1],[8,4,6]]

function pickIt(arr){
  var odd=[],even=[];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i])
    }
    if (arr[i] % 2 == 1) {
      odd.push(arr[i])
    }
  }
  
  
  return [odd,even];
}

// function pickIt (arr) {
//   let odd = []
//   let even =[]

//   for (var x of arr) {
//       ((x % 2) ? odd : even).push(x)    
//   }
//   return [odd, even]
// }