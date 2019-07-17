let slider=document.querySelector(".slide-wrapper ul")
let next=document.querySelector("#nextIcon")
let prev=document.querySelector("#prevIcon")
next.addEventListener("click",function(){
    nextSlider()
})
prev.addEventListener("click",function(){
    prevSlider()
})
let pos=0;
function nextSlider(){
    pos++;
    if(pos==slider.children.length){
        pos=0;
    }
    slider.style.left=(-1140*pos)+"px"
}
function prevSlider(){
    pos--;
    if(pos==-1){
        pos=slider.children.length-1
    }
    slider.style.left=(-1140*pos)+"px"
}
var barIcon=document.querySelector(".bars")
barIcon.addEventListener("click",function(){
    document.querySelector(".layout").classList.add("active")
})

var close=document.querySelector(".close-icon")
close.addEventListener("click",function(){
    document.querySelector(".layout").classList.remove("active")
})