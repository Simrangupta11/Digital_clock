function showTime(){
    var date =new Date();
    var hours= date.getHours();
    var minutes= date.getMinutes();
    var seconds=date.getSeconds();
var session="AM";
    if(hours===0)
    {
        hours=12;
    }
    if(hours>12)
    {
        hours=hours-12;
        session="PM";
    }
    if(hours<10)
    {
        hours="0"+hours;
    }
    if(minutes<10)
    {
        minutes="0"+minutes;
    }
    if(seconds<10)
    {
        seconds="0"+seconds;
    }
     
var time= hours+":"+ minutes+":"+seconds+" "+session;

document.getElementById("myclockdisplay").innerHTML=time;
}
showTime();
setInterval(showTime,1);