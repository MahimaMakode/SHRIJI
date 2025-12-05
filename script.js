const menu = document.querySelector('.res-icon')
const nav = document.querySelector('.nav-menu')
const icons = document.querySelector('.icon-area')

menu.addEventListener('click', (e) => {
    e.stopPropagation() // prevent document click from firing immediately
    nav.appendChild(icons)
    nav.classList.toggle('toggle')
})

// click outside nav -> close if open
document.addEventListener('click', (e) => {
    if (!nav.classList.contains('toggle')) return
    if (!nav.contains(e.target) && !menu.contains(e.target)) {
        nav.classList.remove('toggle')
    }
})

// on scroll -> close if open
window.addEventListener('scroll', () => {
    if (nav.classList.contains('toggle')) {
        nav.classList.remove('toggle')
    }
})
