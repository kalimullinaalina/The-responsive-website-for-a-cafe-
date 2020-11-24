//Select element function
const selectElement = function(element){
    return document.querySelector(element);
};
let menuToggle = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggle.addEventListener('click', function(){
    body.classList.toggle('open');
});

//Scroll reveal
window.sr = ScrollReveal(); 

sr.reveal('.animate-left', {
    origin: 'left',
    durations: 1000,
    distance: '25rem',
    delay: 300
});
sr.reveal('.animate-right', {
    origin: 'right',
    durations: 1000,
    distance: '25rem',
    delay: 600
});
sr.reveal('.animate-top', {
    origin: 'top',
    durations: 1000,
    distance: '25rem',
    delay: 600
});
sr.reveal('.animate-bottom', {
    origin: 'bottom',
    durations: 1000,
    distance: '25rem',
    delay: 600
});