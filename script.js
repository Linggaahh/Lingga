// Menu Toggle Functionality
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
});

// Typing Effect for "I'm a [Role]" Text
const roleText = ["Student", "Mobile App Developer", "Web Designer"];
let roleIndex = 0, charIndex = 0;
const typingSpeed = 100, deletingSpeed = 50, delayBetweenWords = 2000;
const target = document.querySelector('.multiple-text');

function typeRole() {
    if (charIndex < roleText[roleIndex].length) {
        target.textContent += roleText[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, typingSpeed);
    } else {
        setTimeout(deleteRole, delayBetweenWords);
    }
}

function deleteRole() {
    if (charIndex > 0) {
        target.textContent = roleText[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteRole, deletingSpeed);
    } else {
        roleIndex = (roleIndex + 1) % roleText.length;
        setTimeout(typeRole, typingSpeed);
    }
}

typeRole();

// Scroll Animation for Project Section
const projectBoxes = document.querySelectorAll('.project-box');

function animateOnScroll() {
    projectBoxes.forEach(box => {
        if (box.getBoundingClientRect().top < window.innerHeight - 100) {
            box.classList.add('fadeIn');
        }
    });
}

document.addEventListener('scroll', animateOnScroll);

// Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '↑';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    scrollToTopButton.style.display = window.scrollY > 200 ? 'block' : 'none';
});

// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = '🌙';
darkModeToggle.classList.add('dark-mode-toggle');
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
});

// Smooth Scroll for Links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetElement = document.querySelector(link.getAttribute('href'));
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Lazy Load Images
const lazyImages = document.querySelectorAll('img.lazy');

const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
}, { rootMargin: '0px 0px 200px 0px' });

lazyImages.forEach(image => lazyLoadObserver.observe(image));

// Testimonials Carousel
const testimonials = document.querySelectorAll('.testimonial');
let testimonialIndex = 0;

function rotateTestimonials() {
    testimonials.forEach((testimonial, index) => {
        testimonial.classList.toggle('active', index === testimonialIndex);
    });
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}

setInterval(rotateTestimonials, 5000);

// Parallax Scrolling for Background
document.addEventListener('scroll', () => {
    const background = document.querySelector('.home');
    background.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
});

// Animate Skill Progress Bars
const skillBars = document.querySelectorAll('.skill-bar span');

function animateSkillBars() {
    skillBars.forEach((bar) => {
        if (bar.getBoundingClientRect().top < window.innerHeight - 50) {
            bar.style.width = `${bar.dataset.skill}%`;
        }
    });
}

document.addEventListener('scroll', animateSkillBars);

// Hover Effect for Project Boxes
projectBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => box.classList.add('hover'));
    box.addEventListener('mouseleave', () => box.classList.remove('hover'));
});

// Contact Form Modal
const modal = document.querySelector('#contact-modal');
const contactButton = document.querySelector('.contact-button');
const closeModalButton = modal.querySelector('.close-modal');

contactButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    alert(`Message Sent!\nName: ${formData.get('name')}\nEmail: ${formData.get('email')}\nMessage: ${formData.get('message')}`);
    contactForm.reset();
    modal.style.display = 'none';
});
