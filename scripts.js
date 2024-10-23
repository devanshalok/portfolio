// script.js

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  mirror: false,
});

// GSAP Animations
gsap.from(".hero-content h1", { 
  opacity: 0, 
  y: -50, 
  duration: 1, 
  ease: "bounce.out" 
});

gsap.from(".hero-content p", { 
  opacity: 0, 
  y: 50, 
  duration: 1, 
  delay: 0.5 
});

gsap.from(".btn", { 
  opacity: 0, 
  scale: 0, 
  duration: 1, 
  delay: 1 
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
  // Toggle the menu icon
  if (navLinks.classList.contains('active')) {
    menuToggle.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  }
});
