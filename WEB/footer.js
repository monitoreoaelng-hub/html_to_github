// ==========================================
// ARCHIVO: footer.js
// Guardar en la raíz del proyecto
// Carga automática del footer en todas las páginas
// ==========================================

function loadFooter() {
    const footerHTML = `
    <footer>
        <!-- Footer Superior (Azul Oscuro) -->
        <div class="footer-top">
            <div class="footer-container">
                <!-- Columna 1: Proelectronic -->
                <div class="footer-col footer-about">
                    <h3>AELNG SOLUTIONS</h3>
                    <p>Transformamos operaciones industriales con automatización, ingeniería y soluciones digitales. Integramos tecnología avanzada para optimizar procesos, reducir costos y escalar producción de forma inteligente.</p>
                </div>

                <!-- Columna 2: Contacto -->
                <div class="footer-col">
                    <h4>Contacto</h4>
                    <div class="footer-contact-item">
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
                    <div class="footer-contact-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        <div>
                            <strong>Celular:</strong><br>
                            <a href="tel:+593987054442">0995975729</a>
                        </div>
                    </div>
                    <div class="footer-contact-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        <div>
                            <strong>Email:</strong><br>
                            <a href="mailto:monitoreo_es1@aelngsolutions.com">monitoreo_es1@aelngsolutions.com</a>
                        </div>
                    </div>
                </div>

                <!-- Columna 3: Servicios -->
                <div class="footer-col">
                    <h4>Servicios</h4>
                    <ul class="footer-links">
                        <li><a href="automatizacion-control.html">Modernización de maquinaria industrial</a></li>
                        <li><a href="automatizacion-control.html">Sistemas de Control Industrial</a></li>
                        <li><a href="automatizacion-control.html">Programación de PLC's e IPC's</a></li>
                        <li><a href="automatizacion-control.html">Programación de HMI y Sistemas SCADA</a></li>
                        <li><a href="ingenieria-procesos.html">Diseño de planos</a></li>
                        <li><a href="oil-gas.html">Sistemas de Gestión y Control Energético</a></li>
                        <li><a href="proyectos-iot.html">Dimensionamiento e Integración de Sensores</a></li>
                    </ul>
                </div>

                <!-- Columna 4: Productos -->
                <div class="footer-col">
                    <h4>Productos</h4>
                    <ul class="footer-links">
                        <li><a href="productos.html">PLC's y Módulos</a></li>
                        <li><a href="productos.html">Tableros eléctricos de control</a></li>
                        <li><a href="productos.html">Sensores e Instrumentación</a></li>
                        <li><a href="productos.html">Motores | Variadores de velocidad | Breakers</a></li>
                        <li><a href="productos.html">Iluminación Industrial y Comercial</a></li>
                    </ul>
                    
                    <h4 style="margin-top: 30px;">Síguenos En Redes Sociales</h4>
                    <div class="footer-social">
                        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer Inferior (Gris Claro) -->
        <div class="footer-bottom">
            <div class="footer-container">
                <div class="footer-bottom-content">
                    <!-- Columna 1: Brand -->
                    <div class="footer-bottom-col">
                        <h4>AELNG SOLUTIONS</h4>
                        <p>Transformamos operaciones industriales con automatización, ingeniería y soluciones digitales. Integramos tecnología avanzada para optimizar procesos, reducir costos y escalar producción de forma inteligente.</p>
                    </div>

                    <!-- Columna 2: Navegación -->
                    <div class="footer-bottom-col">
                        <h5>NAVEGACIÓN</h5>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="sobre-nosotros.html">Sobre Nosotros</a></li>
                            <li><a href="servicios.html">Servicios</a></li>
                            <li><a href="productos.html">Productos</a></li>
                            <li><a href="sectores.html">Sectores</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="proyectos.html">Proyectos</a></li>
                            <li><a href="contacto.html">Contacto</a></li>
                        </ul>
                    </div>

                    <!-- Columna 3: Servicios -->
                    <div class="footer-bottom-col">
                        <h5>SERVICIOS</h5>
                        <ul>
                            <li><a href="automatizacion-control.html">Automatización Industrial</a></li>
                            <li><a href="ingenieria-procesos.html">Ingeniería y Proyectos</a></li>
                            <li><a href="oil-gas.html">Oil & Gas</a></li>
                            <li><a href="proyectos-iot.html">Digitalización y Tecnología</a></li>
                        </ul>
                    </div>

                    <!-- Columna 4: Sectores -->
                    <div class="footer-bottom-col">
                        <h5>SECTORES</h5>
                        <ul>
                            <li><a href="sectores.html">Industria</a></li>
                            <li><a href="sectores.html">Energía</a></li>
                            <li><a href="sectores.html">Oil & Gas</a></li>
                            <li><a href="sectores.html">Alimentos y Bebidas</a></li>
                            <li><a href="sectores.html">Manufactura</a></li>
                        </ul>
                    </div>

                    <!-- Columna 5: Contacto -->
                    <div class="footer-bottom-col">
                        <h5>CONTACTO</h5>
                        <ul>
                            <li><a href="mailto:monitoreo_es1@aelngsolutions.com">monitoreo_es1@aelngsolutions.com</a></li>
                            <li><a href="tel:+593987054442">+593 98 705 4442</a></li>
                            <li><a href="contacto.html">Cuenca, Ecuador</a></li>
                            <li><a href="contacto.html">Formulario de Contacto</a></li>
                        </ul>
                    </div>
                </div>

                <!-- Copyright -->
                <div class="footer-copyright">
                    <p>© 2025 AELNG SOLUTIONS. Todos los derechos reservados.</p>
                </div>
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