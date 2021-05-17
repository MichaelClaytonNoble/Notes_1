
class Clock{
  constructor(){
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds(); 
    this.printTime();
    setInterval(()=>this._tick(), 1000);
  }

  printTime(){
    const timeString = this.hours.toString() +":"+this.minutes.toString()+":"+this.seconds.toString();
    console.log(timeString); 
  }
  _tick(){
    this.seconds += 1;
    this.printTime();
  }
};

const clock = new Clock(); 
