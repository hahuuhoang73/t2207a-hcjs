function demo(){
    var h=document.getElementById("head")
        h.style.color="red";

}
function demo1(){
    var h=document.getElementById("head")
    h.style.color="green";

}
function change(){
    var ip=document.getElementById("ip");
    console.log(ip.value);
}

function changecolor(){
   // var arr=document.getElementsByTagName("p");
 //   var arr=document.querySelectorAll("p.pg");
    var arr=document.getElementsByClassName("pg");
    for (var i=0;i<arr.length;i++){
        arr[i].style.color="red";
    }
}