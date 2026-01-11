// ========================================
// INDUSTRIAL AI - AUTOMATIZACION INDUSTRIAL
// Script minimalista estilo Cosmos
// ========================================

// Esperar a que el menu.js cargue primero
document.addEventListener('DOMContentLoaded', () => {
    // Dar tiempo a que menu.js inserte el header
    setTimeout(() => {
        initSmoothScroll();
        initHeaderEffect();
        initFAQAccordion();
        initThemeToggle();
        initActiveNavLink();
        console.log('Industrial AI cargado');
    }, 100);
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
    if (!header) {
        console.warn('Header no encontrado');
        return;
    }
    
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Agregar clase 'scrolled' cuando se hace scroll
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
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
        
        if (summary) {
            summary.addEventListener('click', () => {
                // Opcional: Cerrar otros items para comportamiento de accordion unico
                // faqItems.forEach(otherItem => {
                //     if (otherItem !== item && otherItem.open) {
                //         otherItem.open = false;
                //     }
                // });
            });
        }
    });
}

// ========================================
// THEME TOGGLE (DESHABILITADO - MODO CLARO FIJO)
// ========================================

function initThemeToggle() {
    // Funcionalidad deshabilitada - Modo claro fijo
    console.log('Modo claro fijo activado');
}

// ========================================
// ACTIVE NAV LINK
// ========================================

function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    if (sections.length === 0 || navLinks.length === 0) return;

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

// Observar elementos para animacion de entrada
document.querySelectorAll('.feature-simple, .process-item, .module-item, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// DETECCION DE DISPOSITIVO MOVIL
// ========================================

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
    document.body.classList.add('mobile');
}

// ========================================
// PERFORMANCE: TIEMPO DE CARGA
// ========================================

window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`Pagina cargada en ${Math.round(loadTime)}ms`);
});

// ========================================
// CTA TRACKING (OPCIONAL)
// ========================================

document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        const buttonText = this.textContent.trim();
        console.log(`CTA clicked: ${buttonText}`);
        
        // Aqui puedes integrar Google Analytics:
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
        console.log('WhatsApp button clicked');
        
        // Aqui puedes integrar tracking de eventos:
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', 'whatsapp_click', {
        //         'event_category': 'contact',
        //         'event_label': 'whatsapp_float_button'
        //     });
        // }
    });
}

console.log('Todo listo - Modo minimalista activado');

// ========================================
// SERVICES CAROUSEL - iPhone Style
// ========================================

class ServicesCarousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.carousel-slide');
        this.dots = document.querySelectorAll('.carousel-dot');
        this.track = document.querySelector('.carousel-track');
        this.prevBtn = document.querySelector('.carousel-btn-prev');
        this.nextBtn = document.querySelector('.carousel-btn-next');
        
        this.isAnimating = false;
        this.autoPlayInterval = null;
        this.touchStartX = 0;
        this.touchEndX = 0;
        
        this.init();
    }
    
    init() {
        if (!this.track) {
            console.warn('Carousel track not found');
            return;
        }
        
        // Event listeners
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        // Dots navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Touch events for swipe
        this.track.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
        this.track.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: true });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
        
        // Auto-play (optional - descomenta para activar)
        // this.startAutoPlay();
        
        // Pause autoplay on hover
        const container = document.querySelector('.carousel-container');
        if (container) {
            container.addEventListener('mouseenter', () => this.stopAutoPlay());
            container.addEventListener('mouseleave', () => this.startAutoPlay());
        }
        
        console.log('Services Carousel initialized');
    }
    
    goToSlide(index) {
        if (this.isAnimating || index === this.currentSlide) return;
        
        this.isAnimating = true;
        
        // Update transform
        this.track.style.transform = `translateX(-${index * 100}%)`;
        
        // Update active states
        this.updateDots(index);
        
        this.currentSlide = index;
        
        // Reset animation flag
        setTimeout(() => {
            this.isAnimating = false;
        }, 600);
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }
    
    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevIndex);
    }
    
    updateDots(index) {
        this.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    handleTouchStart(e) {
        this.touchStartX = e.changedTouches[0].screenX;
    }
    
    handleTouchEnd(e) {
        this.touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
    }
    
    handleSwipe() {
        const swipeThreshold = 50;
        const diff = this.touchStartX - this.touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next slide
                this.nextSlide();
            } else {
                // Swipe right - prev slide
                this.prevSlide();
            }
        }
    }
    
    startAutoPlay(interval = 5000) {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, interval);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        new ServicesCarousel();
    }, 150);
});

// ========================================
// DROPDOWN Y NAVEGACION ADICIONAL
// ========================================

// Cerrar dropdown al hacer clic fuera
document.addEventListener('click', (e) => {
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(e.target)) {
            // Opcional: anadir clase para cerrar animado
        }
    });
});

// ========================================
// FLIP CARDS - TECNOLOGÍAS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initTechFlipCards();
    }, 200);
});

function initTechFlipCards() {
    const flipCards = document.querySelectorAll('.tech-card-flip-container');
    
    if (flipCards.length === 0) {
        console.warn('No se encontraron tech flip cards');
        return;
    }
    
    flipCards.forEach(card => {
        let hoverTimeout = null;
        let isFlipped = false;
        
        // Hover - esperar 2 segundos antes de voltear
        card.addEventListener('mouseenter', function() {
            if (!isFlipped) {
                hoverTimeout = setTimeout(() => {
                    this.classList.add('flipped');
                    isFlipped = true;
                }, 2000); // 2 segundos
            }
        });
        
        // Mouse sale - cancelar timeout si no se ha volteado
        card.addEventListener('mouseleave', function() {
            if (hoverTimeout) {
                clearTimeout(hoverTimeout);
                hoverTimeout = null;
            }
            
            // Regresar al frente después de un breve delay
            if (isFlipped) {
                setTimeout(() => {
                    this.classList.remove('flipped');
                    isFlipped = false;
                }, 300);
            }
        });
        
        // Click alternativo - voltear inmediatamente (útil en móviles)
        card.addEventListener('click', function() {
            if (hoverTimeout) {
                clearTimeout(hoverTimeout);
                hoverTimeout = null;
            }
            
            this.classList.toggle('flipped');
            isFlipped = !isFlipped;
        });
    });
    
    console.log(`${flipCards.length} tech flip cards initialized`);
}

// Touch devices - voltear con tap
if ('ontouchstart' in window) {
    document.addEventListener('DOMContentLoaded', () => {
        const flipCards = document.querySelectorAll('.tech-card-flip-container');
        
        flipCards.forEach(card => {
            let touchStartTime = 0;
            
            card.addEventListener('touchstart', function() {
                touchStartTime = Date.now();
            });
            
            card.addEventListener('touchend', function(e) {
                const touchDuration = Date.now() - touchStartTime;
                
                // Si es un tap rápido (no un scroll), voltear
                if (touchDuration < 200) {
                    e.preventDefault();
                    this.classList.toggle('flipped');
                }
            });
        });
    });
}