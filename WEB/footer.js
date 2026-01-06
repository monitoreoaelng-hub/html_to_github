// // ==========================================
// // ARCHIVO: footer.js
// // Guardar en la raíz del proyecto
// // Carga automática del footer en todas las páginas
// // ==========================================


function loadFooter() {
    const footerHTML = `
    <footer class="main-footer">
        <!-- Footer Principal -->
        <div class="footer-content">
            <div class="footer-container">
                <!-- Columna 1: Logo y Descripción -->
                <div class="footer-column footer-brand">
                    <img src="img/Logo + nombre sin fondo.png" alt="AELNG Solutions Logo" class="footer-logo">
                    <p class="footer-description">
                        Transformamos operaciones industriales con automatización, ingeniería y soluciones digitales. 
                        Integramos tecnología avanzada para optimizar procesos, reducir costos y escalar producción de forma inteligente.
                    </p>
                    <h4>Servicios</h4>
                    <ul class="footer-links">
                        <a href="automatizacion-control.html">Modernización de maquinaria industrial</a>
                        <a href="automatizacion-control.html">Sistemas de Control Industrial</a>
                        <a href="automatizacion-control.html">Programación de PLC's e IPC's</a>
                        <a href="automatizacion-control.html">Programación de HMI y Sistemas SCADA</a>
                        <a href="ingenieria-procesos.html">Diseño de planos</a>
                        <a href="oil-gas.html">Sistemas de Gestión y Control Energético</a>
                    </ul>
                </div>
                <!-- Columna 2: Productos -->
                <div class="footer-column">
                    <h4>Productos</h4>
                    <ul class="footer-links">
                        <a href="productos.html">PLC's y Módulos</a>
                        <a href="productos.html">Tableros eléctricos de control</a>
                        <a href="productos.html">Sensores e Instrumentación</a>
                        <a href="productos.html">Motores | Variadores | Breakers</a>
                        <a href="productos.html">Iluminación Industrial</a>
                    </ul>
                </div>
                <!-- Columna 3: Contacto  -->
                <div class="footer-column">
                    <h4>Contacto</h4>
                    <div class="footer-info-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <div>
                            <strong>Dirección:</strong><br>
                            Calle Alfonso Borrero y R. Ramirez<br>
                            Cuenca, Azuay, Ecuador
                        </div>
                    </div>
                    <div class="footer-info-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        <div>
                            <strong>Celular:</strong><br>
                            <a href="tel:+593995975729">0995975729</a>
                        </div>
                    </div>
                    <div class="footer-info-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        <div>
                            <strong>Email:</strong><br>
                            <a href="mailto:monitoreo_es1@aelngsolutions.com">monitoreo_es1@aelngsolutions.com</a>
                        </div>
                    </div>

                    <!-- Redes Sociales -->
                    <div class="footer-social">
                        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
                            <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                            <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                    </div>

                    <!-- Botón Solicitar Cotización -->
                    <a href="contacto.html" class="footer-cta-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="17 8 12 3 7 8"/>
                            <line x1="12" y1="3" x2="12" y2="15"/>
                        </svg>
                        Solicitar Cotización
                    </a>
                </div>
                
            </div>
        </div>
        
        <!-- Footer Bottom - Copyright -->
        <div class="footer-bottom">
            <div class="footer-container">
                <p>&copy; 2025 AELNG Solutions. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
    `;

    // Insertar el footer antes del cierre del body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
    
    console.log('Footer cargado correctamente');
}

// Cargar el footer automáticamente cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadFooter);

// También exportar para uso manual si es necesario
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadFooter };
}