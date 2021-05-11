function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s ;
    
    var t = setTimeout(startTime, 500);
    n = new Date();
    y = n.getFullYear();
    mo = n.getMonth() + 1;
    d = n.getDate();
    var time2 = mo + " " + d + " " + y + " " + time;
    
    document.getElementById("MyClockDisplay").innerText = time2;
    document.getElementById("MyClockDisplay").textContent = time2;
    
    setTimeout(showTime, 1000);
    
}

showTime();
