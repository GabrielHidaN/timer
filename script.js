const start = document.querySelector('.start-btn');
const pause = document.querySelector('.pause-btn');
const stop = document.querySelector('.stop-btn');


var sec=0;
var min=0;
var hr=0
var interval




function doubleDigit (dgt){
    if(dgt<10){
        return('0'+dgt)
    }else{
            return(dgt)
        }
    }


start.addEventListener ('click', ()=>{
    watch()
    interval= setInterval(watch,1000)

});

pause.addEventListener ('click', ()=>{
    clearInterval(interval)
});

stop.addEventListener ('click', ()=>{
    clearInterval(interval)
    sec=0
    min=0
    document.querySelector('.time').innerHTML='00:00:00'
});



function watch(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }
    document.querySelector('.time').innerHTML=doubleDigit(hr)+':'+doubleDigit(min)+':'+doubleDigit(sec)
};


