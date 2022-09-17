var m=9;
var s=59;
function start() {
    if (s === -1) {
        var xyz = document.getElementById("hour");
        xyz.innerText += " " + s;
        m -= 1;
        s = 59;
    }
    if (m === -1) {
        var xyz = document.getElementById("second");
        xyz.innerText += " " + m;
        m = 59;
    }


    if (m === -1) {
        clearTimeout(timeout);
        alert('Hết giờ');
        return false;
    }
}
timeout = setTimeout(function(){
    s--;
    start();
}, 1000);
//setTimeout(demo,5000);// callback function
//var at = setInterval(demo,1000)


//tam dung 5s
//demo();
