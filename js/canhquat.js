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
var f=0;
var mot,hai,ba;
function demo1() {
    var x = document.getElementById("abc");
    x.style.transform = 'rotate(' + f + 'deg)';
    f += 10;

}

function quaytron1() {
    // var a = document.getElementById("a");
    setInterval(demo1, 50);
}
function quaytron2() {
    setInterval(demo1, 20);
}

function quaytron3() {
    setInterval(demo1, 5);
}
function quaytron(){
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
