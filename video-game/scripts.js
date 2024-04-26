
let nav = document.getElementById('nav');


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    
    if(value != 0){
        nav.style.opacity = '0%'
        nav.style.transition = '1.5s'
    }else{
        nav.style.opacity = '100%'
    }


})