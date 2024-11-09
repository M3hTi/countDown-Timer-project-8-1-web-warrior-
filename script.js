const minBox = document.querySelector('#min');
const secBox = document.querySelector('#sec');
const startBtn = document.querySelector('.control-button');


function Timer(min, sec) {
    this.minutes = min;
    this.seconds = sec;
    this.isRun = false;
    this.intervalID = null;
}
Timer.prototype.runPause = function(Timer, minBox , secBox) {
    if(!this.isRun){
        this.isRun = true;

        const self = this;
        this.intervalID = setInterval(function () {
            if(self.seconds > 0){
                self.seconds--;
            }
            else if(self.minutes > 0){
                self.minutes--;
                self.seconds = 59;
            }
            else{
                self.isRun = false;
                clearInterval(self.intervalID);
            }
            minBox.innerHTML = self.minutes;
            secBox.innerHTML = self.seconds;
        }, 1000);
    }else{
        this.isRun = false;
        clearInterval(this.intervalID);
    }
};

Timer.prototype.show = function(Timer) {
    minBox.innerHTML = this.minutes.toString().padStart(2, '0');
    secBox.innerHTML = this.seconds.toString().padStart(2, '0');
};

const myTimer = new Timer (6 , 0)



startBtn.addEventListener('click', function () {
    myTimer.runPause(myTimer, minBox, secBox);
});


window.addEventListener('load', function () {
    myTimer.show(myTimer);
});
