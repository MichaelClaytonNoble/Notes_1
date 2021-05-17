var readline = require('readline'); 

reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){

  if( numsLeft > 0 ){
    reader.question("Enter a number", (number)=> {
      sum+= parseInt(number); 
      console.log("Sum: ", sum);
      addNumbers(sum, numsLeft-1, completionCallback);
    });
  }
  else{
    completionCallback(sum);
    reader.close();
  }
};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));