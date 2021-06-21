'use strict';



//Section 3 - slider animation
let topElement= document.querySelector('#sliderTopElement');
let topElementButton= document.querySelector('#sliderButton');
let movingCircle=document.querySelector('#movingCircle')



topElement.addEventListener('click', function(){

    const slide=topElement.classList.toggle('slide');
    slide;
    
    if (slide){
    movingCircle.style.animationName="move-vertically-up";
    }
    else{
        movingCircle.style.animationName="move-vertically-down"
    }
});