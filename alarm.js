
var alarmSound = new Audio();
alarmSound.src='au.mp3';
function setTime(){
    var time = document.getElementById("date-time").valueAsNumber;
    if(isNaN(time)){
        alert("Type the date")
        return;
    }
    else{
    var convertTime = new Date(time);
    var displayTime = new Date(convertTime.getUTCFullYear(),convertTime.getUTCMonth(),convertTime.getUTCDate(),
       convertTime.getUTCHours(),convertTime.getUTCMinutes(),convertTime.getUTCSeconds());
       var date = new Date();
    var diff =  displayTime.getTime()- date.getTime();

    if(diff<0){
        alert("time passed away");
        return;
    }
    setTimeout(initAlarm,diff);            
}
}
function initAlarm(){
           alarmSound.play();
    }
function stopAlarm(){
    alarmSound.pause();
}
function snooze(){
    var time = document.getElementById("date-time").valueAsNumber;

    if(isNaN(time)){
        alert("Type the date")
        return;
    }
    else{
    alarmSound.pause();
    setTimeout(initAlarm,10000);
    }
}
