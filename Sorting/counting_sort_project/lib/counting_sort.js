function countingSort(arr, max) {
  let counter = Array.from({length: max+1}, ()=> 0);

  arr.forEach( num => {
    counter[num] = counter[num]+1;
  });

  let result = []; 
  for(let i = 0; i < counter.length; i++){
    let numbers = Array.from({length: counter[i]}, ()=> i);
    result = result.concat(numbers);
  }
  return result;
}

module.exports = {
    countingSort
};