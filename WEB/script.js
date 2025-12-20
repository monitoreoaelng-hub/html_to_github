// ========================================
// INDUSTRIAL AI - AUTOMATIZACIÓN INDUSTRIAL
// Script minimalista estilo Cosmos
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initHeaderEffect();
    initFAQAccordion();
    initThemeToggle();
    initActiveNavLink();
    console.log('✨ Industrial AI cargado');
});

// ========================================
// SMOOTH SCROLL
// ========================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// HEADER SCROLL EFFECT
// ========================================

function initHeaderEffect() {
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const isLightMode = document.body.classList.contains('light-mode');
        
        if (currentScroll > 50) {
            if (isLightMode) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
            } else {
                header.style.background = 'rgba(0, 0, 0, 0.9)';
            }
            header.style.backdropFilter = 'blur(20px)';
        } else {
            if (isLightMode) {
                header.style.background = 'rgba(255, 255, 255, 0.7)';
            } else {
                header.style.background = 'rgba(0, 0, 0, 0.7)';
            }
        }
        
        lastScroll = currentScroll;
    });
}

// ========================================
// FAQ ACCORDION
// ========================================

function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq');
    
    faqItems.forEach(item => {
        const summary = item.querySelector('summary');
        
        summary.addEventListener('click', () => {
            // Opcional: Cerrar otros items para comportamiento de accordion único
            // faqItems.forEach(otherItem => {
            //     if (otherItem !== item && otherItem.open) {
            //         otherItem.open = false;
            //     }
            // });
        });
    });
}

// ========================================
// THEME TOGGLE (MODO CLARO/OSCURO)
// ========================================

function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const header = document.querySelector('header');

    // Función para actualizar el header según el tema
    function updateHeaderForTheme() {
        const currentScroll = window.pageYOffset;
        const isLightMode = body.classList.contains('light-mode');
        
        if (currentScroll > 50) {
            header.style.background = isLightMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.9)';
        } else {
            header.style.background = isLightMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)';
        }
    }

    // Cargar tema guardado
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        updateHeaderForTheme();
    }

    // Toggle del tema
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
        updateHeaderForTheme();
    });
}

// ========================================
// ACTIVE NAV LINK
// ========================================

function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.color = 'var(--text-secondary)';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.color = 'var(--text-color)';
            }
        });
    });
}

// ========================================
// PARALLAX SUAVE EN HERO
// ========================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.25}px)`;
    }
});

// ========================================
// INTERSECTION OBSERVER PARA ANIMACIONES
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animación de entrada
document.querySelectorAll('.feature-simple, .process-item, .module-item, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// DETECCIÓN DE DISPOSITIVO MÓVIL
// ========================================

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
    document.body.classList.add('mobile');
    // Deshabilitar parallax en móviles
    const hero = document.querySelector('.hero');
    if (hero) {
        window.removeEventListener('scroll', () => {});
    }
}

// ========================================
// PERFORMANCE: TIEMPO DE CARGA
// ========================================

window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`⚡ Página cargada en ${Math.round(loadTime)}ms`);
});

// ========================================
// CTA TRACKING (OPCIONAL)
// ========================================

document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        const buttonText = this.textContent.trim();
        console.log(`🎯 CTA clicked: ${buttonText}`);
        
        // Aquí puedes integrar Google Analytics:
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', 'cta_click', {
        //         'event_category': 'conversion',
        //         'event_label': buttonText
        //     });
        // }
    });
});

// ========================================
// WHATSAPP BUTTON TRACKING
// ========================================

const whatsappButton = document.querySelector('.whatsapp-float');
if (whatsappButton) {
    whatsappButton.addEventListener('click', () => {
        console.log('📱 WhatsApp button clicked');
        
        // Aquí puedes integrar tracking de eventos:
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', 'whatsapp_click', {
        //         'event_category': 'contact',
        //         'event_label': 'whatsapp_float_button'
        //     });
        // }
    });
}

console.log('🚀 Todo listo - Modo minimalista activado');

