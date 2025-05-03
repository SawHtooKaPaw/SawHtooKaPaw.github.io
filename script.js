// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Simple animation for content boxes when they come into view
const contentBoxes = document.querySelectorAll('.content-box');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

contentBoxes.forEach(box => {
    box.style.opacity = 0;
    box.style.transform = 'translateY(20px)';
    box.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(box);
});

// Current year for footer
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = yearSpan.textContent.replace('2023', currentYear);
});
