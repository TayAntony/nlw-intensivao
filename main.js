function onScroll() {
    if (acrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

//function ScrollReveal(){
//   var options = {
//      reveal: function () {}
//      }

//      return options }
//var options = ScrollReveal()
ScrollReveal({
    origin: 'top',
    distance: '30px',
}).reveal(` #home, 
            #home img, 
            #home .stats, 
            #services,
            #services header,
            #services .card
            #about,
            #about header,
            #about .content`);