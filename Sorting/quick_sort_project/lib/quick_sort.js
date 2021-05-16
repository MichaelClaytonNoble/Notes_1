function quickSort(array) {

  if (array.length <=1 ) return array;

  let pivot = array.shift();
  let leftSide = array.filter( n => n < pivot );
  let rightSide = array.filter( n => n >= pivot ); 

  let left = quickSort(leftSide);
  let right = quickSort(rightSide);

  return left.concat(pivot, right);
}


module.exports = {
    quickSort
};