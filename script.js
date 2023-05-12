/* Scroll reveal */
ScrollReveal({ reset: true ,   
    distance:'80px',
    delay:200,
    duration:2000});
    
    ScrollReveal().reveal('.main', { origin:'top' });
    ScrollReveal().reveal('#information', { origin:'top' });
    ScrollReveal().reveal('#team', { origin:'top' });
/*putting a background on header*/

window.addEventListener('scroll', ()=>
{
    let header = document.querySelector('header');
    let scrollPosition = window.scrollY;

    if(scrollPosition > 10)
    { header.style.backgroundColor = 'var(--bg-color)'}
    if(scrollPosition <= 10) {header.style.background = 'none'}
})

/*Scroll and navs*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id')

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('selected');
        document.querySelector(`header nav a[href*=${id}]`).classList.add('selected');
      });
    }
  });
}


/*menu */
let menuIcon = document.querySelector('.header-menu i ');
let navbar = document.querySelector('.header-menu ul');

menuIcon.addEventListener('click', ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    if(document.querySelector('header').style.backgroundColor == '' | document.querySelector('header').style.background == 'none'){
        document.querySelector('header').style.backgroundColor = 'var(--bg-color)'
    }
});