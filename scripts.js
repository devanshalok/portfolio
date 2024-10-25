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

// Get the hamburger menu, nav links, and document body
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
const menuIcon = menuToggle.querySelector('i'); // Select the icon inside the hamburger

// Function to close the mobile menu
function closeMenu() {
  navLinks.classList.remove('active');
  menuIcon.classList.remove('fa-times'); // Remove the close icon
  menuIcon.classList.add('fa-bars'); // Add the hamburger icon
}

// Function to toggle the mobile menu
menuToggle.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent triggering the document click listener

  // Toggle the active class
  navLinks.classList.toggle('active');
  
  // Toggle between the hamburger and close (X) icons
  if (navLinks.classList.contains('active')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    closeMenu(); // Reset the menu if not active
  }
});

// Add click event listener to close the menu when clicking outside of it
document.addEventListener('click', (event) => {
  const isClickInsideNav = navLinks.contains(event.target);
  const isClickOnToggle = menuToggle.contains(event.target);

  // If the click is outside the navigation and the menu is active, close the menu
  if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
    closeMenu(); // Close the menu
  }
});

// Ensure menu closes on link click in the mobile menu
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    closeMenu(); // Close the menu after clicking any link
  });
});

// GSAP for Accordion Animation
const experienceHeaders = document.querySelectorAll('.experience-header');

experienceHeaders.forEach(header => {
  header.addEventListener('click', function() {
    const parent = this.parentElement;
    const details = parent.querySelector('.experience-details');

    // Close all other accordions
    document.querySelectorAll('.experience-item').forEach(item => {
      if (item !== parent && item.classList.contains('active')) {
        item.classList.remove('active');
        gsap.to(item.querySelector('.experience-details'), { height: 0, opacity: 0, duration: 0.5 });
      }
    });

    // Toggle this accordion
    if (parent.classList.contains('active')) {
      parent.classList.remove('active');
      gsap.to(details, { height: 0, opacity: 0, duration: 0.5 });
    } else {
      parent.classList.add('active');
      gsap.to(details, { height: "auto", opacity: 1, duration: 0.5 });
    }
  });
});


// GSAP Animation for Footer Content
gsap.from(".contact-info", { 
  opacity: 0, 
  x: -100, 
  duration: 1 
});

gsap.from(".testimonials .testimonial-item", { 
  opacity: 0, 
  y: 50, 
  duration: 0.8, 
  stagger: 0.3 // Stagger animations for each testimonial
});
