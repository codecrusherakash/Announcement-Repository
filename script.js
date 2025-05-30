let el=document.getElementById("b1");
el.addEventListener("click",function(){
    alert("Just an attempt to impress you")
});
let ele=document.getElementById("b2");
ele.addEventListener("click",function(){
    alert("New projects Soon")
});
let navi=document.querySelector("#nav")
let an0=document.querySelector('#anchor0')
let an1=document.querySelector('#anchor1')
let an3=document.querySelector('#anchor3')
let an2=document.querySelector('#anchor2')
let pa1=document.querySelector("#p1")
let pa2=document.querySelector("#p2")
let a=document.querySelector("#list")
let par=document.querySelector("#para")
let v=0
function night(){
    if(v==0){
    an0.style.backgroundColor="black"
    an0.style.color="orangered"
    an1.style.backgroundColor="black"
    an1.style.color="orangered"
    an2.style.backgroundColor="black"
    an2.style.color="orangered"
    an3.style.backgroundColor="black"
    an3.style.color="orangered"
    navi.style.backgroundColor="black"
    navi.style.color="orangered"
    pa1.style.backgroundColor="black"
    pa2.style.backgroundColor="black"
    pa2.style.color="orangered"
    a.style.color="white"
    par.style.backgroundColor="black"
    pa1.style.border="solid orangered"
    pa2.style.border="solid orangered"
    navi.style.border="solid orangered"
    par.style.border="solid orangered"
    v=1
    }
    else
    {
    an0.style.backgroundColor="orangered"
    an0.style.color="black"
    an1.style.backgroundColor="orangered"
    an1.style.color="black"
    an2.style.backgroundColor="orangered"
    an2.style.color="black"
    an3.style.backgroundColor="orangered"
    an3.style.color="black"
    navi.style.backgroundColor="orangered"
    navi.style.color="black"
    pa1.style.backgroundColor="orangered"
    pa2.style.backgroundColor="orangered"
    pa2.style.color="black"
    pa1.style.border="solid black"
    pa2.style.border="solid black"
    navi.style.border="solid black"
    par.style.backgroundColor="red"
    a.style.color="black"
    v=0
    }
}