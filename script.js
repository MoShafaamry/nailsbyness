document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Submission (you can replace this with actual form submission logic)
    const form = document.getElementById('booking-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Booking submitted! We will contact you soon to confirm your appointment.');
        form.reset();
    });
});

// Add this to the existing JavaScript file, inside the DOMContentLoaded event listener

// Video background handling
const video = document.getElementById('hero-video');
if (video) {
    // Ensure video plays automatically
    video.play().catch(function(error) {
        console.log("Video autoplay failed:", error);
    });

    // Handle video loading
    video.addEventListener('loadeddata', function() {
        // Video is loaded and can be played
        video.classList.add('loaded');
    });
}




