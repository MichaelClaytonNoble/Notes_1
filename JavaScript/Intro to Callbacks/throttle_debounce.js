

//throttle -> minimum time interval that must pass between invocations
//useful if function does something computationally expensive or for games.

Function.prototype.myThrottle = function( interval ){

  let tooSoon = false;
  return (...args)=>{
    if(!tooSoon){
      tooSoon = true;
      setTimeout( ()=>tooSoon = false, interval);
      this(...args);
    }
  }
}

class Neuron {
  fire() {
    console.log("Firing!");
  }
}

const neuron = new Neuron();

neuron.fire = neuron.fire.myThrottle(500);

const interval = setInterval(() => {
  neuron.fire();
}, 10);


Function.prototype.myDebounce = function(interval){

  return (...args) => {
    const fnCall = () => {
      timeout = null;
      this(...args);
    }
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, interval); 
  }

}