// ==========================================
// ARCHIVO: menu.js
// Guardar en la raíz del proyecto
// Versión: Dropdown en hover + Click directo a página
// ==========================================

// Función que carga el menú automáticamente
function loadMenu() {
    const menuHTML = `
    <header>
        <a href="index.html" class="logo">
            <img src="img/Logo + nombre sin fondo.png" alt="AELNG Solutions Logo" />
        </a>
        
        <nav>
            <a href="index.html">Inicio</a>
            <a href="sobre-nosotros.html">Nosotros</a>
            
            <!-- Dropdown SERVICIOS con link clickeable -->
            <div class="nav-dropdown">
                <a href="servicios.html" class="nav-link">
                    Servicios
                    <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </a>
                <div class="dropdown-menu">
                    <a href="automatizacion-control.html">Automatización y Control Industrial</a>
                    <a href="ingenieria-procesos.html">Ingeniería de Procesos</a>
                    <a href="ingenieria-diseno.html">Ingeniería de Diseño</a>
                    <div class="dropdown-divider"></div>
                    <a href="proyectos-iot.html">Proyectos IoT / Industria 4.0</a>
                    <a href="oil-gas.html">Oil & Gas / GNL</a>
                </div>
            </div>
            
            <!-- Dropdown PRODUCTOS con link clickeable -->
            <div class="nav-dropdown">
                <a href="productos.html" class="nav-link">
                    Productos
                    <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </a>
                <div class="dropdown-menu">
                    <a href="productos.html#sensores">Sensores</a>
                    <a href="productos.html#plcs">PLCs</a>
                    <a href="productos.html#hmi-scada">HMI y SCADA</a>
                    <a href="productos.html#redes">Redes Industriales</a>
                    <div class="dropdown-divider"></div>
                    <a href="productos.html#instrumentacion">Instrumentación</a>
                    <a href="productos.html#controladores">Controladores</a>
                    <a href="productos.html#iot">Equipos IoT / LoRaWAN</a>
                    <a href="productos.html#variadores">Variadores de Frecuencia</a>
                </div>
            </div>
            
            <a href="sectores.html">Sectores</a>
            <a href="blog.html">Blog</a>
            <a href="proyectos.html">Proyectos</a>
            <a href="contacto.html">Contacto</a>
            
            <button id="theme-toggle" class="theme-toggle" aria-label="Cambiar tema">
                <svg class="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
                <svg class="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            </button>
        </nav>
    </header>
    `;

    // Insertar el menú al inicio del body
    document.body.insertAdjacentHTML('afterbegin', menuHTML);

    // Inicializar funcionalidades después de cargar el menú
    initializeMenu();
}

// Función para inicializar funcionalidades del menú
function initializeMenu() {
    // NOTA: El Theme Toggle ya se maneja en script.js con initThemeToggle()
    // No duplicar funcionalidad aquí para evitar conflictos
    
    // Marcar página activa
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || href === `./${currentPage}`) {
            link.classList.add('active');
        }
    });

    // Cerrar dropdown al hacer clic fuera
    document.addEventListener('click', (e) => {
        const dropdowns = document.querySelectorAll('.nav-dropdown');
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('dropdown-open');
            }
        });
    });
    
    console.log('Menu cargado correctamente');
}

// Cargar el menú automáticamente cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadMenu);

// También exportar para uso manual si es necesario
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadMenu, initializeMenu };
}