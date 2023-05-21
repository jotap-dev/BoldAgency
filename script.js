
function scrollX(){ 
const buttonLeft = document.querySelector('#scrollLeft')
const buttonRight = document.querySelector('#scrollRight')
let feedback = document.querySelector('.personContainer')

    if(window.innerWidth > 750){
        if(feedback.style.transform == 'translateX(0px)'){
            feedback.style.transform = 'translateX(-750px)'
            buttonRight.style.filter = 'brightness(30%)'
            buttonLeft.style.filter = 'brightness(100%)'
        }else{
            feedback.style.transform = 'translateX(0px)'
            buttonRight.style.filter = 'brightness(100%)'
            buttonLeft.style.filter = 'brightness(30%)'
        }
    }else if(window.innerWidth > 750){
        if(feedback.style.transform == 'translateX(0px)'){
            feedback.style.transform = 'translateX(-450px)'
            buttonRight.style.filter = 'brightness(30%)'
            buttonLeft.style.filter = 'brightness(100%)'
        }else{
            feedback.style.transform = 'translateX(0px)'
            buttonRight.style.filter = 'brightness(100%)'
            buttonLeft.style.filter = 'brightness(30%)'
        }
    }else{
        if(feedback.style.transform == 'translateX(0px)'){
            feedback.style.transform = 'translateX(-290px)'
            buttonRight.style.filter = 'brightness(30%)'
            buttonLeft.style.filter = 'brightness(100%)'
        }else{
            feedback.style.transform = 'translateX(0px)'
            buttonRight.style.filter = 'brightness(100%)'
            buttonLeft.style.filter = 'brightness(30%)'
        }
    }



}

function backToTop(){
    window.scrollTo(0,0)
}

function revealMenu(){
    const mobileMenu = document.querySelector('.mobileLinks')
    if(mobileMenu.style.display == 'none'){
        mobileMenu.style.display = 'flex'
    }else{
        mobileMenu.style.display = 'none'
    }
}

window.setInterval(() => {scrollX()}, 3000)
