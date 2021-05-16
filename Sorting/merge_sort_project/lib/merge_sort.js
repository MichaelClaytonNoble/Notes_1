function merge(array1, array2) {
 
  const mergedArray = []; 
  while( array1.length && array2.length ){
    let left = array1[0];
    let right = array2[0];

    if(left < right ){
      mergedArray.push(array1.shift());
    }
    if(right <= left){
      mergedArray.push(array2.shift());
    }
  }

  return mergedArray.concat(array1, array2); 
}

function mergeSort(array) {
  if( array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);

  let leftSide = array.slice(0, mid);
  let rightSide = array.slice(mid);

  let left = mergeSort(leftSide);
  let right = mergeSort(rightSide); 

  return merge(left, right);
}

module.exports = {
    merge,
    mergeSort
};