
// Assume an array of non-negative integers. A second array is formed by shuffling 
// the elements of the first array and deleting a random element. Given these two 
// arrays, find which element is missing in the second array. Do this in linear 
// time with constant memory use.
function findMissingNumber(arr1, arr2){
  const catalog = {}
  const data = {
    shorter: (arr1.length > arr2.length) ?  arr2 : arr1,
    longer: (arr1.length > arr2.length) ? arr1 : arr2
  }

  data.shorter.forEach( num => {
    catalog[num] = catalog[num]+1 || 1;
  });

  let number = -1;
  data.longer.forEach( num => {
    if( !catalog[num] ){
      number = num;
    }
    else{
      catalog[num] -=1;
    }
  });
  return number;
}

console.log( "missing number: ", findMissingNumber([8,3,5,1], [1,5,3]) );
console.log( "missing number: ", findMissingNumber([1,1,1,1], [1,1,1]) );
console.log( "missing number: ", findMissingNumber([3,5,4,8,7,9], [7,4,3,5,9]) );
