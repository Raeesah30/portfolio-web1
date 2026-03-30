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
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
