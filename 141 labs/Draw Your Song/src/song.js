

/**
 * Draws a single square of size 10 X 10 with the given color.
 * @param {string} color A color.
 */
function square(color){

}

/**
 * remove the newline and any trailing whitespace from the line
 * after drawing the row, move the cursor to the beginning of the next
 * 'row' on the canvas to be ready to paint the next line of the file 
 * if any.
 * 
 * @param {string} line - A line of text
 */
function paintLine(){

}

/**
 * takes the file name, opens the file and draws the picture by 
 * calling paintLine() for each line of text in the file.
 * 
 * @param {string} file file of the song
 */
function picture(file){

  fetch(`/../data/${file}`)
  .then( res => console.log(res) )

  let reader = new FileReader();



}

/**
 * Prompts the user for a file name and calls the function 
 * picture() to do the work. Waits for the user to close the canvas
 * before terminating.
 */
export function main(){

  // let fileName = window.prompt("Enter filename: ");
  let fileName = "s1.txt";

  picture(fileName);
}

