
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // 1. Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Update active nav link
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // 2. Animate content boxes when they come into view
    const animateOnScroll = function() {
        const contentBoxes = document.querySelectorAll('.content-box, .formula, .chemical-equation');
        
        contentBoxes.forEach(box => {
            const boxPosition = box.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (boxPosition < screenPosition) {
                box.style.opacity = '1';
                box.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animation
    const contentBoxes = document.querySelectorAll('.content-box, .formula, .chemical-equation');
    contentBoxes.forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(20px)';
        box.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Run on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    // 3. Interactive hobby sections
    const hobbyItems = document.querySelectorAll('.hobby-item');
    hobbyItems.forEach(item => {
        const title = item.querySelector('h3');
        
        title.addEventListener('click', function() {
            // Toggle expand/collapse
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
            
            // Add visual feedback
            this.classList.toggle('active');
        });
    });

    // 4. Dynamic year in footer
    const yearSpan = document.querySelector('footer p');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = yearSpan.textContent.replace('2024', currentYear);
    }

    // 5. Social button hover effects
    const socialButtons = document.querySelectorAll('.social-button');
    socialButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // 6. Profile image animation
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(5deg)';
        });
        
        profileImg.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0)';
        });
    }

    // 7. Back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑ Top';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.display = 'none';
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 8. Chemical equation highlight effect
    const chemicalEquation = document.querySelector('.chemical-equation p');
    if (chemicalEquation) {
        chemicalEquation.addEventListener('click', function() {
            this.classList.toggle('highlight');
        });
    }

    // 9. Mobile menu toggle (for smaller screens)
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '☰ Menu';
    document.querySelector('nav .container').prepend(mobileMenuToggle);

    mobileMenuToggle.addEventListener('click', function() {
        const navUl = document.querySelector('nav ul');
        navUl.style.display = navUl.style.display === 'flex' ? 'none' : 'flex';
    });

    // Adjust for mobile on resize
    window.addEventListener('resize', function() {
        const navUl = document.querySelector('nav ul');
        if (window.innerWidth > 768) {
            navUl.style.display = 'flex';
        } else {
            navUl.style.display = 'none';
        }
    });

    // Initialize mobile menu state
    if (window.innerWidth <= 768) {
        document.querySelector('nav ul').style.display = 'none';
    }
});
