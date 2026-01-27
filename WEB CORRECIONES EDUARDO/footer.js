// ==========================================
// ARCHIVO: footer.js
// Footer estilo FORTYTEC - Versión FINAL
// Para AELNG Solutions
// ==========================================

function loadFooter() {
    const footerHTML = `
    <footer class="fortytec-footer">
        <div class="fortytec-footer-content">
            <div class="fortytec-grid">
                
                <!-- Columna 1: Logo CENTRADO + Tagline CENTRADO + PRODUCTOS -->
                <div class="fortytec-column fortytec-col-brand">
                    <div class="fortytec-logo-section-centered">
                        <img src="img/Logo + nombre sin fondo.png" alt="AELNG Solutions" class="fortytec-logo">
                        <p class="fortytec-tagline">Transformamos operaciones industriales con automatización, ingeniería y soluciones digitales de vanguardia</p>
                    </div>
                    

                </div>
                
                <!-- Columna 2: ÁREAS DE ESPECIALIZACIÓN -->
                <div class="fortytec-column">
                    <h3 class="fortytec-title">Áreas de Especialización:</h3>
                    <ul class="fortytec-list">
                        <li><a href="automatizacion-control.html">Automatización y Control Industrial</a></li>
                        <li><a href="ingenieria-procesos.html">Ingeniería de Procesos</a></li>
                        <li><a href="ingenieria-diseno.html">Ingeniería de Diseño</a></li>
                        <li><a href="oil-gas.html">Oil & Gas / GNL</a></li>
                    </ul>
                </div>
                
                <!-- Columna 3: Contacto + REDES SOCIALES + Botón -->
                <div class="fortytec-column fortytec-col-contact">
                    <h3 class="fortytec-title">Contacto y Direcciones:</h3>
                    
                    <div class="fortytec-contact-block">
                        <h5 class="fortytec-subtitle">Contacto:</h5>
                        <div class="fortytec-contact-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <a href="mailto:monitoreo_es1@aelngsolutions.com">monitoreo_es1@aelngsolutions.com</a>
                        </div>
                        <div class="fortytec-contact-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                            </svg>
                            <span>(+593) 99 597 5729</span>
                        </div>
                    </div>
                    
                    <div class="fortytec-contact-block">
                        <h5 class="fortytec-subtitle">Oficina Principal:</h5>
                        <div class="fortytec-contact-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                            <span>Calle Alfonso Borrero y R. Ramirez - Cuenca - Ecuador</span>
                        </div>
                    </div>
                    
                    <!-- REDES SOCIALES CENTRADAS encima del botón -->
                    <div class="fortytec-social-centered fortytec-social-above-button">
                        <a href="https://facebook.com" target="_blank" aria-label="Facebook" class="fortytec-social-icon facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" class="fortytec-social-icon linkedin">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <a href="https://youtube.com" target="_blank" aria-label="YouTube" class="fortytec-social-icon youtube">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>
                    </div>
                    
                    <a href="contacto.html" class="fortytec-btn">
                        Solicitar Cotización
                    </a>
                </div>
                
            </div>
        </div>
        
        <!-- Copyright - Estilo FORTYTEC exacto -->
        <div class="fortytec-copyright">
            <p>Copyright © 2026 AELNG Solutions | Powered by AELNG Solutions</p>
        </div>
    </footer>
    `;

    // Insertar el footer antes del cierre del body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
    
    console.log('Footer FORTYTEC style FINAL cargado correctamente');
}

// Cargar el footer automáticamente cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadFooter);

// También exportar para uso manual si es necesario
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadFooter };
}
