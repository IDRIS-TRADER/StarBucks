
// Header

const headerFixced = document.querySelector('.header')

window.addEventListener('scroll', () => {
    const headerHeight = headerFixced.clientHeight / 20;
    const skrollTop = window.scrollY;

    if(skrollTop >= headerHeight) {
        headerFixced.classList.add('header-fixced') 
    }else {
        headerFixced.classList.remove('header-fixced')
    }
})

// Burger-button

const menuHeader = document.querySelector('.header__menu--list--is-active')

document.addEventListener('click', (event)=> {
    if(event.target.closest('.header--burger--button')) {
        menuHeader.classList.add('menu-active')
    }else {
        menuHeader.classList.remove('menu-active')
    }
})

// Coffe

const arrowRight = document.querySelector('.content-fourth__shelf-second--arrol-right')
const shelf = document.querySelector('.content-fourth__shelf-second')

document.addEventListener('click', (event) => {
    if(event.target.closest('.content-fourth__shelf-second--arrol-right')) {
         shelf.classList.add('transform')
         arrowRight.style.opacity = '0'
    }else {
        shelf.classList.remove('transform')
        arrowRight.style.opacity = '1'
    }
})


