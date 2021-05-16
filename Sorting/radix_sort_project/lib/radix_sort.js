
function numDigits(num){

  let n = num;
  let numDigits = 0;
  while( n >= 1 ){
    n = n / 10; 
    numDigits += 1;
  }
  return numDigits;
}


//what digit is at the given place value in num ? 
function getDigitFrom(num, place){
  return Math.floor(Math.abs(num)/Math.pow(10,place)) % 10; 
}

function getMaxDigits(nums){
  let longest = nums.reduce( (a,b) => a > b ? a : b ); 
  return numDigits(longest); 
}

function radixSort(arr) {
  if( !Array.isArray(arr))return null;
  if( !arr.length ) return [];  

  let maxDigits = getMaxDigits(arr); 

  for( let k = 0; k <= maxDigits; k++){

    let buckets = Array.from({ length: 10 }, () => []); // Array of empty arrays

    arr.forEach( num => {
      let currentDigit = getDigitFrom(num, k);
      buckets[currentDigit].push(num); 
    });
    arr = [].concat(...buckets); 
  }
  return arr;
}

module.exports = {
    radixSort
};