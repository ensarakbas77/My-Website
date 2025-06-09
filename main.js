// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', function () {
    // Initialize all functions
    initNavbar();
    initTypingAnimation();
    initScrollAnimations();
    initSkillBars();
    initContactForm();
    initSmoothScrolling();
});

// ===== NAVBAR SCROLL EFFECT =====
function initNavbar() {
    const navbar = document.querySelector('.custom-navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar background on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
    });

    // Active nav link highlighting
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', function () {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// ===== TYPING ANIMATION =====
function initTypingAnimation() {
    const typedTextElement = document.querySelector('.typed-text');
    const cursorElement = document.querySelector('.cursor');

    const textArray = [
        'Yazılım Geliştirici',
        'AI Meraklısı',
        'Problem Çözücü',
        'Öğrenmeye Açık',
        'Teknoloji Tutkunu'
    ];

    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if (!cursorElement.classList.contains('typing')) {
                cursorElement.classList.add('typing');
            }
            typedTextElement.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            cursorElement.classList.remove('typing');
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if (!cursorElement.classList.contains('typing')) {
                cursorElement.classList.add('typing');
            }
            typedTextElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            cursorElement.classList.remove('typing');
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, 1000);
        }
    }

    // Start the animation
    if (typedTextElement) {
        setTimeout(type, 1000);
    }
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Add scroll animation class to elements
    const animateElements = document.querySelectorAll('.section-title, .section-subtitle, .feature-item, .project-card, .contact-info');
    animateElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}

// ===== SKILL BARS ANIMATION =====
function initSkillBars() {
    const skillBars = document.querySelectorAll('.progress-bar');

    const skillObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-width');

                setTimeout(() => {
                    progressBar.style.width = width + '%';
                }, 200);

                skillObserver.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}



// ===== TECH ICONS HOVER EFFECT =====
document.addEventListener('DOMContentLoaded', function () {
    const techIcons = document.querySelectorAll('.tech-icon');

    techIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px) scale(1.1) rotateY(10deg)';
        });

        icon.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
        });
    });
});

// ===== PARALLAX EFFECT =====
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    const heroBackground = document.querySelector('.hero-bg');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${rate}px)`;
    }
});

// ===== PROJECT CARDS ANIMATION =====
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;

        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-15px) rotateX(5deg)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) rotateX(0deg)';
        });
    });
}

// ===== LOADING ANIMATION =====
window.addEventListener('load', function () {
    // Hide loading screen if exists
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => loadingScreen.remove(), 500);
    }

    // Initialize project cards after load
    initProjectCards();

    // Add loaded class to body
    document.body.classList.add('loaded');
});

// ===== MOBILE MENU CLOSE =====
document.addEventListener('click', function (e) {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');

    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    }
});

// ===== THEME TOGGLE (Optional) =====
function toggleTheme() {
    document.body.classList.toggle('dark-theme');

    // Save preference
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDark);
}

// Load theme preference
document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('darkTheme');
    if (savedTheme === 'true') {
        document.body.classList.add('dark-theme');
    }
});

// ===== CUSTOM CSS ANIMATIONS =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .is-invalid {
        border-color: #dc3545 !important;
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25) !important;
    }
    
    .loaded .fade-in,
    .loaded .fade-in-delay-1,
    .loaded .fade-in-delay-2,
    .loaded .fade-in-delay-3,
    .loaded .fade-in-delay-4,
    .loaded .fade-in-delay-5,
    .loaded .fade-in-delay-6 {
        animation-play-state: running;
    }
`;
document.head.appendChild(style);

// ===== PERFORMANCE OPTIMIZATION =====
// Throttle scroll events
function throttle(func, wait) {
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

// Apply throttling to scroll events
const throttledScroll = throttle(function () {
    // Scroll-dependent functions here
}, 16); // ~60fps

window.addEventListener('scroll', throttledScroll);

// ===== ACCESSIBILITY IMPROVEMENTS =====
document.addEventListener('keydown', function (e) {
    // Skip to main content
    if (e.key === 'Tab' && !e.shiftKey) {
        const focusableElements = document.querySelectorAll(
            'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );

        // Add focus indicators
        focusableElements.forEach(el => {
            el.addEventListener('focus', function () {
                this.style.outline = '2px solid var(--primary-color)';
                this.style.outlineOffset = '2px';
            });

            el.addEventListener('blur', function () {
                this.style.outline = '';
                this.style.outlineOffset = '';
            });
        });
    }
});