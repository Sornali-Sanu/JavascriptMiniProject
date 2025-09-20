let secElapsed=0;
let interval=null;
const time=document.getElementById("time")

function padStart(value)
{
    return String(value).padStart(2,"0")
}
function setTime()
{
    const min=Math.floor(secElapsed/60)
    const sec=secElapsed%60
    time.innerHTML=`${ padStart (min)}:${padStart(sec)}`;
}

function timer()
{
    secElapsed++;
    setTime()
}



function startClock()

{
    if(interval)
       stopClock()
    interval=setInterval(timer,1000)

}
function stopClock()
{
    clearInterval(interval)

}
function resetClock()
{
    stopClock()
    secElapsed=0;
    setTime()

}
