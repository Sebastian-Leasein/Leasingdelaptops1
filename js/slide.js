const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnleft = document.querySelector("#slide_i");
const btnRight = document.querySelector("#slide_d");


slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function derslide(){
let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
slider.style.marginLeft="-200%";
slider.style.transition="all 0.5s";
setTimeout(function(){
    slider.style.transition="none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft="-100%";
}, 500);
}

function izslide(){
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];
slider.style.marginLeft="0";
slider.style.transition="all 0.5s";
setTimeout(function(){
    slider.style.transition="none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft="-100%";
}, 500);
}

btnRight.addEventListener('click', function(){ 
    derslide();
});

btnleft.addEventListener('click', function(){ 
    izslide();
});