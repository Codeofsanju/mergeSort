/* PSEUDOCODE 
  func split (arr) 
  find the left side of the array by slicing from 0th index to the midpoint (Math.floor array.length/2)
  find the right side of the array by slicing from the midpoint to the length of the array
  return [leftside, rightside]
*/

function split(arr){
  let leftSide = arr.slice(0, Math.floor(arr.length / 2));
  let rightSide = arr.slice(arr.length / 2);
  return [leftSide, rightSide];
}

/* PSEUDOCODE

*/

function merge(leftSide, rightSide) {
  
}