const burgerEl = document.querySelector('.header-burger');

burgerEl.addEventListener('click', function(){
    if(burgerEl.classList.contains("active")) {
        burgerEl.classList.remove("active");
    }else {
        burgerEl.classList.add('active')
    };
})