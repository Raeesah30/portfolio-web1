const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
 
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});
 
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        //If the section is visible on screen, add the 'active' class
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 }); //Trigger when 10% of the section is visible

//Globalise reveal
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
