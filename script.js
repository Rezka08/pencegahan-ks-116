// Mobile Menu Toggle logic
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const icon = btn.querySelector('i');

btn.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        setTimeout(() => {
            menu.classList.remove('opacity-0', 'scale-95');
            menu.classList.add('opacity-100', 'scale-100');
        }, 10);
        icon.classList.remove('fa-bars-staggered');
        icon.classList.add('fa-xmark');
    } else {
        menu.classList.remove('opacity-100', 'scale-100');
        menu.classList.add('opacity-0', 'scale-95');
        setTimeout(() => {
            menu.classList.add('hidden');
        }, 200); // match transition duration
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars-staggered');
    }
});

// Close mobile menu on link click
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('opacity-100', 'scale-100');
        menu.classList.add('opacity-0', 'scale-95');
        setTimeout(() => {
            menu.classList.add('hidden');
        }, 200);
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars-staggered');
    });
});

// Navbar Scroll Effect (Glassmorphism transition)
const navbar = document.getElementById('navbar');
const navContainer = document.getElementById('nav-container');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navContainer.classList.add('glass-nav-scrolled');
        navContainer.classList.remove('glass-nav');
        navbar.classList.remove('pt-4');
        navbar.classList.add('pt-2');
    } else {
        navContainer.classList.remove('glass-nav-scrolled');
        navContainer.classList.add('glass-nav');
        navbar.classList.add('pt-4');
        navbar.classList.remove('pt-2');
    }
});

// Intersection Observer for Reveal Animations (Smooth entry)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 120; // Starts revealing when 120px in view
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
// Trigger once on load to show above-the-fold content
setTimeout(reveal, 100);

// Set current year in footer dynamically
const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Horizontal Scroll Indicators for "Kenali Bentuknya" (Mobile)
const scrollCards = document.getElementById('scroll-cards');
const scrollDots = document.getElementById('scroll-dots');

if (scrollCards && scrollDots) {
    const dots = scrollDots.querySelectorAll('.dot');
    scrollCards.addEventListener('scroll', () => {
        const scrollPosition = scrollCards.scrollLeft;
        const maxScroll = scrollCards.scrollWidth - scrollCards.clientWidth;
        
        if (maxScroll > 0) {
            const scrollPercentage = scrollPosition / maxScroll;
            let activeIndex = Math.round(scrollPercentage * (dots.length - 1));
            
            dots.forEach((dot, index) => {
                if (index === activeIndex) {
                    dot.classList.remove('w-2', 'bg-gray-300');
                    dot.classList.add('w-4', 'bg-primary-600');
                } else {
                    dot.classList.remove('w-4', 'bg-primary-600');
                    dot.classList.add('w-2', 'bg-gray-300');
                }
            });
        }
    });
}