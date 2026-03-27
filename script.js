//Getting the elements by their ids
const modal = document.getElementById('flashcard-flip');
const modalTitle = document.getElementById('data-title');
const modalDesc = document.getElementById('data-desc');

//Selecting all my project cards and the close button
const flashcards = document.querySelectorAll('.flashcard');
const closeBtn = document.querySelector('.close-btn');

//Clickable card like flashcards
flashcards.forEach(card => {
    card.addEventListener('click', () => {
        // Grab the info from the data attributes I made in HTML
        modalTitle.textContent = card.getAttribute('data-title');
        modalDesc.textContent = card.getAttribute('data-desc');
        
        // Show the popup and stop the page from scrolling behind it
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
    });
});

//Function to hide the popup again
const closePopup = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Let the page scroll again
};

//Close when clicking the 'x'
closeBtn.onclick = closePopup;

//Close if I click anywhere outside the white box
window.onclick = (e) => { 
    if (e.target === modal) closePopup(); 
};


//Scroll animation section
// To make things fade in when I scroll down to the 
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        //If the section is visible on screen, add the 'active' class
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 }); // Trigger when 10% of the section is visible

//Globalise reveal
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));