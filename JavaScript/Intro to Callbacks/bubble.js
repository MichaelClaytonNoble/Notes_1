
var readline = require('readline'); 

reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function absurdBubbleSort( arr, sortCompletionCallback ){

  function outerBubbleSortLoop(madeAnySwaps){
    if(madeAnySwaps){
      innerBubbleSortLoop( arr, 0, false, outerBubbleSortLoop);
    }
    else{
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

function askIfGreaterThan( el1, el2, callback ){
  reader.question(`Is ${el1} > ${el2}?`, (res)=> res==='yes'? callback(true) : callback(false));
}

function innerBubbleSortLoop( arr, i, madeAnySwaps, outerBubbleSortLoop ){

  if( i < arr.length-1){
    askIfGreaterThan( arr[i], arr[i+1], (isGreaterThan)=>{
      if( isGreaterThan ){
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        madeAnySwaps = true;
      }
      innerBubbleSortLoop( arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
  else{
    outerBubbleSortLoop(madeAnySwaps);
  }
}

absurdBubbleSort([3, 2, 4, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});