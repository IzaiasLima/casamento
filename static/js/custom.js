const menu = document.getElementById("menu")
const carousel = document.getElementsByTagName("body")[0]

window.addEventListener('scroll', function() {
    const position = carousel.getBoundingClientRect();
    
    if (position.top < -5 && position.top > -40) {
        menu.classList.add("dark-shadow")
    }
    if (position.top > -4) {
        menu.classList.remove("dark-shadow")
    }
});

