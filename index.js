var hours=document.getElementById("#hours");
var minutes=document.getElementById("#minutes");
var seconds=document.getElementById("#seconds");
const AM=document.querySelector(".AM");
const PM=document.querySelector(".PM");
hours=00;
minutes=00;
seconds=00;
init();
function init()
{
    var d = new Date();
    hours=d.getHours();
    console.log(hours);
    minutes=d.getMinutes();
    seconds=d.getSeconds();
    console.log(minutes);
    console.log(seconds);
    displayTime();
    showSession();
}
function displayTime()
{
    if(hours<10)
    {
        document.getElementById('hours').innerHTML="0"+hours;
    }
    else{
        document.getElementById('hours').innerHTML=hours; 
    }
    if(minutes<10)
    {
        document.getElementById('minutes').innerHTML="0"+minutes;
    }
    else{
        document.getElementById('minutes').innerHTML=minutes;
    }
   if(seconds<10)
    {
        document.getElementById('seconds').innerHTML="0"+seconds;
    }
    else{
        document.getElementById('seconds').innerHTML=seconds;
    }

}
function showSession()
{
    if(hours>=12)
    {
        PM.classList.remove('hidden');
    }
    else if(hours<12)
    {
        AM.classList.remove('hidden'); 
    }
    
}

