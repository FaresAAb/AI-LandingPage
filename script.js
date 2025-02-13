/*==================== MENU SHOW/HIDE ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDE =====*/
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.querySelector('.header')
    if(this.scrollY >= 80) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll')
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== PARTICLES JS ====================*/
document.addEventListener('DOMContentLoaded', function() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js',
        {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#00f2fe"
                },
                "shape": {
                    "type": "circle"
                },
                "opacity": {
                    "value": 0.5,
                    "random": false
                },
                "size": {
                    "value": 3,
                    "random": true
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00f2fe",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "repulse": {
                        "distance": 100,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
        });
    }
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
document.addEventListener('DOMContentLoaded', function() {
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 400
        });

        // Hero Section
        sr.reveal('.hero-content', {
            origin: 'bottom',
            distance: '100px'
        });

        // About Section
        sr.reveal('.about-content', {
            delay: 500
        });

        // Benefits Section
        sr.reveal('.benefit-card', {
            interval: 100
        });

        // Timeline Section
        sr.reveal('.timeline-item', {
            interval: 200,
            origin: 'left',
            distance: '150px'
        });

        sr.reveal('.timeline-item:nth-child(even)', {
            origin: 'right'
        });

        // Future Section
        sr.reveal('.future-card', {
            interval: 100,
            scale: 0.9
        });

        // Footer Content
        sr.reveal('.footer-content', {
            delay: 200,
            origin: 'bottom'
        });
    }
});

/*==================== SMOOTH SCROLL ====================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/*==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================*/
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.benefit-card, .future-card, .timeline-item').forEach((element) => {
    observer.observe(element);
});

/*==================== DYNAMIC YEAR ====================*/
document.addEventListener('DOMContentLoaded', function() {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
});

/*==================== PRELOADER ====================*/
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

/*==================== PERFORMANCE OPTIMIZATION ====================*/
// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
const optimizedScroll = debounce(function() {
    scrollHeader();
    scrollUp();
}, 10);

window.addEventListener('scroll', optimizedScroll);

/*==================== DARK MODE TOGGLE ====================*/
function initializeDarkMode() {
    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'enabled') {
        document.body.classList.add('dark-mode');
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', 
        document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled'
    );
}

document.addEventListener('DOMContentLoaded', initializeDarkMode);

/*==================== RESPONSIVE IMAGES ====================*/
function handleResponsiveImages() {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        if (img.getBoundingClientRect().top < window.innerHeight + 100) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        }
    });
}

window.addEventListener('scroll', debounce(handleResponsiveImages, 10));
document.addEventListener('DOMContentLoaded', handleResponsiveImages);

/*==================== ERROR HANDLING ====================*/
window.addEventListener('error', function(e) {
    console.error('Global error handler:', e.error);
    // You can implement your error reporting logic here
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
});