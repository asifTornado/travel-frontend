export default class  IdleTimer{
    timer = 0;
    intervalId = 0;
    callback = function(){}
    constructor(time, callback) {
      this.time = time;
      this.callback = callback;
      
    }

    initiate(){
  
        document.addEventListener("mousedown", () => this.resetTimer())
        document.addEventListener("mousemove", () => this.resetTimer())
        document.addEventListener("mouseup", () => this.resetTimer())
    }

    resetTimer(){
        this.timer = 0
    }
  
    // Method of the class
    startTimer(){
   
         this.intervalId = setInterval(() => this.onIdle(), this.time)
    }

    stopTimer(){
        clearInterval(this.intervalId)
    }

    onIdle(){
        this.timer++;
        if(this.timer > this.time){
           console.log(this.timer)
           this.callback();
           this.resetTimer();
        }
    
        
    
    }
  }