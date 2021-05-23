
const ctx = document.getElementById("canvas").getContext('2d');
const coords = {x: 0, y: 0};
/**
 * Draws a single square of size 10 X 10 with the given color.
 * @param {string} color A color.
 */
function square(color){

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.fillRect(coords.x, coords.y, 10, 10);
  ctx.closePath();
  coords.x+=10;
}

/**
 * remove the newline and any trailing whitespace from the line
 * after drawing the row, move the cursor to the beginning of the next
 * 'row' on the canvas to be ready to paint the next line of the file 
 * if any.
 * 
 * @param {string} line - A line of text
 */
function paintLine(line){
  function color(char){
    let code = char.charCodeAt();
    if( code < 70 ) return "green";
    if( code < 100 ) return "yellow";
    if( code < 110 ) return "cyan";
    if( code < 122 ) return "red";
    return "orange";
  }

  line.split('').forEach( char=> {
    square(color(char));
  });
}

/**
 * takes the file name, opens the file and draws the picture by 
 * calling paintLine() for each line of text in the file.
 * 
 * @param {string} file file of the song
 */
function picture(file){

  fetch(`/../data/${file}`)
  .then( res => res.text())
  .then( data => {
    let lines = data.split("\n");
    lines.forEach( line=>{
      paintLine(line.trim());
      coords.y+=10;
      coords.x=0;
    });
  });
}

/**
 * Prompts the user for a file name and calls the function 
 * picture() to do the work. Waits for the user to close the canvas
 * before terminating.
 */
export function main(){

  let fileName = window.prompt("Enter filename: ");
  // let fileName = "s1.txt";

  picture(fileName);
}

