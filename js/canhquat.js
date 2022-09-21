var obj = {
    name : 'Phung Van Vu',
    age: 18 ,
    mark: 6 ,
    girlfriends:['nguyen thuy kieu','tran thi bo','nguyen thi hien','thuy duyen'],
    eat: function (){
        console.log(this.name+" đang đi ỉ...");
    }
};
console.log(obj.name);
obj.eat();
obj.name = 'nguyen viet cuong';
console.log(obj.name);
for (var i=0; i< obj.girlfriends.length;i++){
    console.log(obj.girlfriends[i]);
}
obj.eat();
var f= false;
var v=0;
var a=0;
function quaycanhquat() {
    if (f == true) {
        var canhquat = document.getElementById("abc");
        canhquat.style.transform = 'rotate(' + v + 'deg)';
        v += a;
    }
}
setInterval(quaycanhquat,10);
function off(){
    f=false;
    v=0;
    a=0;
}
function f1(){
    if (f == false){
        f=true;
    }
    v=0;
    a=1;

}
function f2(){
    if (f == false){
        f=true;
    }
    v=0;
    a=3;
}
function f3(){
    if (f == false){
        f=true;
    }
    v=0;
    a=200;
}
var m=1;
var s=0;

function Timer(){
    var min=document.getElementById("min");
    var sec=document.getElementById("sec");
    min.innerText=m;
    sec.innerText=s;
    s--;
    if (s<0){
        s=59;
        m--;
    }
    if (m < 0){
        clearInterval(si);
    }
}

var si;
function startTimer(){
    si =setInterval(Timer,1000);
}
var t=1;
function tongcong(){
    var cong=document.getElementById("cong");
    cong.innerText=t;
    t++;
}

