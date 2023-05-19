
const buttonLeft = document.querySelector('#scrollLeft')
const buttonRight = document.querySelector('#scrollRight')
let feedback = document.querySelector('.personContainer')

function scrollX(){    

if(feedback.style.transform == 'translateX(0px)'){
    feedback.style.transform = 'translateX(-700px)'
    buttonRight.style.filter = 'brightness(30%)'
    buttonLeft.style.filter = 'brightness(100%)'
}else{
    feedback.style.transform = 'translateX(0px)'
    buttonRight.style.filter = 'brightness(100%)'
    buttonLeft.style.filter = 'brightness(30%)'
}

}

function backToTop(){
    window.scrollTo(0,0)
}

window.onload(setInterval(() => {scrollX()}, 3500))
