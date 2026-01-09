// ==========================================
// ARCHIVO: whatsapp-widget.js
// Widget de WhatsApp estilo Fortytec
// Con animación de rotación y panel expandible
// ==========================================

function loadWhatsAppWidget() {
    // Número de WhatsApp (cambiar por el número real)
    const whatsappNumber = '593987054442'; // Formato: código país + número sin espacios
    const whatsappMessage = 'Hola, necesito información sobre automatización industrial';
    
    const whatsappHTML = `
    <div class="whatsapp-widget-fortytec">
        <!-- Cuadro de mensaje pequeño (estado inicial) -->
        <div class="whatsapp-message-small" id="whatsappMessageSmall">
            <p>Necesitas ayuda?<br><strong>Escribenos por WhatsApp</strong></p>
        </div>
        
        <!-- Botón de WhatsApp -->
        <button class="whatsapp-button-fortytec" id="whatsappButton" aria-label="WhatsApp">
            <svg class="whatsapp-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0C7.164 0 0 7.164 0 16c0 2.82.732 5.484 2.004 7.78L.068 30.744l7.22-1.896A15.932 15.932 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.36c-2.496 0-4.856-.684-6.876-1.868l-.492-.292-5.1 1.34 1.364-4.98-.32-.512A13.296 13.296 0 012.64 16c0-7.352 5.984-13.36 13.36-13.36 7.352 0 13.36 6.008 13.36 13.36 0 7.376-6.008 13.36-13.36 13.36zm7.34-10.02c-.404-.2-2.38-1.172-2.748-1.308-.368-.136-.636-.2-.904.2-.268.404-1.036 1.308-1.272 1.576-.236.268-.472.3-.876.1-.404-.2-1.704-.628-3.244-2.004-1.2-1.068-2.008-2.388-2.244-2.792-.236-.404-.024-.62.176-.82.18-.18.404-.472.604-.708.2-.236.268-.404.404-.672.136-.268.068-.5-.032-.7-.1-.2-.904-2.176-1.236-2.98-.324-.784-.652-.676-.904-.688-.236-.012-.504-.012-.772-.012s-.708.1-1.076.5c-.368.404-1.404 1.372-1.404 3.344s1.436 3.88 1.636 4.148c.2.268 2.82 4.304 6.828 6.036.952.416 1.696.664 2.276.848.956.304 1.828.26 2.516.156.768-.116 2.38-.972 2.716-1.912.336-.94.336-1.744.236-1.912-.1-.168-.368-.268-.772-.468z" fill="currentColor"/>
            </svg>
            <svg class="close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
        
        <!-- Panel expandido (oculto inicialmente) -->
        <div class="whatsapp-panel-expanded" id="whatsappPanel">
            <!-- Parte verde superior -->
            <div class="whatsapp-panel-header">
                <svg class="whatsapp-panel-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0C7.164 0 0 7.164 0 16c0 2.82.732 5.484 2.004 7.78L.068 30.744l7.22-1.896A15.932 15.932 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.36c-2.496 0-4.856-.684-6.876-1.868l-.492-.292-5.1 1.34 1.364-4.98-.32-.512A13.296 13.296 0 012.64 16c0-7.352 5.984-13.36 13.36-13.36 7.352 0 13.36 6.008 13.36 13.36 0 7.376-6.008 13.36-13.36 13.36zm7.34-10.02c-.404-.2-2.38-1.172-2.748-1.308-.368-.136-.636-.2-.904.2-.268.404-1.036 1.308-1.272 1.576-.236.268-.472.3-.876.1-.404-.2-1.704-.628-3.244-2.004-1.2-1.068-2.008-2.388-2.244-2.792-.236-.404-.024-.62.176-.82.18-.18.404-.472.604-.708.2-.236.268-.404.404-.672.136-.268.068-.5-.032-.7-.1-.2-.904-2.176-1.236-2.98-.324-.784-.652-.676-.904-.688-.236-.012-.504-.012-.772-.012s-.708.1-1.076.5c-.368.404-1.404 1.372-1.404 3.344s1.436 3.88 1.636 4.148c.2.268 2.82 4.304 6.828 6.036.952.416 1.696.664 2.276.848.956.304 1.828.26 2.516.156.768-.116 2.38-.972 2.716-1.912.336-.94.336-1.744.236-1.912-.1-.168-.368-.268-.772-.468z" fill="currentColor"/>
                </svg>
                <div>
                    <h3>Empezar una conversación</h3>
                    <p class="whatsapp-panel-subtitle">¡Hola! Nuestro equipo técnico está listo para ayudarte. Haz clic para comenzar a chatear por WhatsApp.</p>
                </div>
            </div>
            
            <!-- Parte blanca inferior -->
            <div class="whatsapp-panel-white-section">
                <p class="whatsapp-panel-response-time">Respondemos normalmente en pocos minutos.</p>
                
                <a href="https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}" 
                   class="whatsapp-contact-option"
                   target="_blank"
                   rel="noopener noreferrer">
                    <div class="whatsapp-contact-avatar">
                        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 0C7.164 0 0 7.164 0 16c0 2.82.732 5.484 2.004 7.78L.068 30.744l7.22-1.896A15.932 15.932 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.36c-2.496 0-4.856-.684-6.876-1.868l-.492-.292-5.1 1.34 1.364-4.98-.32-.512A13.296 13.296 0 012.64 16c0-7.352 5.984-13.36 13.36-13.36 7.352 0 13.36 6.008 13.36 13.36 0 7.376-6.008 13.36-13.36 13.36zm7.34-10.02c-.404-.2-2.38-1.172-2.748-1.308-.368-.136-.636-.2-.904.2-.268.404-1.036 1.308-1.272 1.576-.236.268-.472.3-.876.1-.404-.2-1.704-.628-3.244-2.004-1.2-1.068-2.008-2.388-2.244-2.792-.236-.404-.024-.62.176-.82.18-.18.404-.472.604-.708.2-.236.268-.404.404-.672.136-.268.068-.5-.032-.7-.1-.2-.904-2.176-1.236-2.98-.324-.784-.652-.676-.904-.688-.236-.012-.504-.012-.772-.012s-.708.1-1.076.5c-.368.404-1.404 1.372-1.404 3.344s1.436 3.88 1.636 4.148c.2.268 2.82 4.304 6.828 6.036.952.416 1.696.664 2.276.848.956.304 1.828.26 2.516.156.768-.116 2.38-.972 2.716-1.912.336-.94.336-1.744.236-1.912-.1-.168-.368-.268-.772-.468z" fill="currentColor"/>
                        </svg>
                    </div>
                    <span>Asesor Comercial AELNG</span>
                    <svg class="whatsapp-contact-arrow" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.82.732 5.484 2.004 7.78L.068 30.744l7.22-1.896A15.932 15.932 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.36c-2.496 0-4.856-.684-6.876-1.868l-.492-.292-5.1 1.34 1.364-4.98-.32-.512A13.296 13.296 0 012.64 16c0-7.352 5.984-13.36 13.36-13.36 7.352 0 13.36 6.008 13.36 13.36 0 7.376-6.008 13.36-13.36 13.36zm7.34-10.02c-.404-.2-2.38-1.172-2.748-1.308-.368-.136-.636-.2-.904.2-.268.404-1.036 1.308-1.272 1.576-.236.268-.472.3-.876.1-.404-.2-1.704-.628-3.244-2.004-1.2-1.068-2.008-2.388-2.244-2.792-.236-.404-.024-.62.176-.82.18-.18.404-.472.604-.708.2-.236.268-.404.404-.672.136-.268.068-.5-.032-.7-.1-.2-.904-2.176-1.236-2.98-.324-.784-.652-.676-.904-.688-.236-.012-.504-.012-.772-.012s-.708.1-1.076.5c-.368.404-1.404 1.372-1.404 3.344s1.436 3.88 1.636 4.148c.2.268 2.82 4.304 6.828 6.036.952.416 1.696.664 2.276.848.956.304 1.828.26 2.516.156.768-.116 2.38-.972 2.716-1.912.336-.94.336-1.744.236-1.912-.1-.168-.368-.268-.772-.468z" fill="currentColor"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    `;

    // Insertar el widget antes del cierre del body
    document.body.insertAdjacentHTML('beforeend', whatsappHTML);
    
    // Referencias a elementos
    const button = document.getElementById('whatsappButton');
    const messageSmall = document.getElementById('whatsappMessageSmall');
    const panel = document.getElementById('whatsappPanel');
    
    let isExpanded = false;
    
    // Evento click en el botón
    button.addEventListener('click', () => {
        isExpanded = !isExpanded;
        
        if (isExpanded) {
            // Expandir
            button.classList.add('expanded');
            messageSmall.classList.add('hidden');
            panel.classList.add('show');
        } else {
            // Contraer
            button.classList.remove('expanded');
            messageSmall.classList.remove('hidden');
            panel.classList.remove('show');
        }
    });
    
    console.log('Widget de WhatsApp Fortytec cargado correctamente');
}

// Cargar el widget automáticamente cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadWhatsAppWidget);

// También exportar para uso manual si es necesario
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadWhatsAppWidget };
}
