// ==========================================
// ARCHIVO: menu.js - SIN CAMBIO DE TEMA
// Diseño fijo sin toggle de modo claro/oscuro
// ==========================================

console.log('✓ menu.js cargado');

// Función que carga el menú automáticamente
function loadMenu() {
    console.log('→ Cargando menú...');
    
    try {
        const menuHTML = `
        <!-- Barra superior con color del footer oscurecido -->
        <div class="top-bar-fortytec"></div>
        
        <header class="main-header">
            <div class="header-content">
                <a href="index.html" class="logo">
                    <img src="img/Logo + nombre sin fondo.png" alt="AELNG Solutions Logo" onerror="console.error('Error: No se puede cargar el logo')" />
                </a>
                
                <nav>
                    <a href="index.html">Home</a>
                    <a href="sobre-nosotros.html">Sobre Nosotros</a>
                    
                    <!-- Dropdown SERVICIOS -->
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
                    
                    <!-- Dropdown PRODUCTOS -->
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
                </nav>
            </div>
        </header>
        `;

        // Insertar el menú al inicio del body
        if (document.body) {
            document.body.insertAdjacentHTML('afterbegin', menuHTML);
            console.log('✓ Menu HTML insertado correctamente');
            
            // Inicializar funcionalidades
            initializeMenu();
        } else {
            console.error('✗ Error: document.body no existe');
        }
        
    } catch (error) {
        console.error('✗ Error al cargar menu:', error);
    }
}

// Función para inicializar funcionalidades del menú
function initializeMenu() {
    try {
        // Marcar página activa
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('header.main-header nav a:not(.nav-link)');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || href === `./${currentPage}`) {
                link.classList.add('active');
            }
        });

        // Cerrar dropdown al hacer clic fuera
        document.addEventListener('click', (e) => {
            const dropdowns = document.querySelectorAll('header.main-header .nav-dropdown');
            dropdowns.forEach(dropdown => {
                if (!dropdown.contains(e.target)) {
                    dropdown.classList.remove('dropdown-open');
                }
            });
        });
        
        console.log('✓ Menu inicializado correctamente');
        console.log('✓ Página actual:', currentPage);
        
    } catch (error) {
        console.error('✗ Error al inicializar menu:', error);
    }
}

// Cargar el menú cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadMenu);
} else {
    // Si el DOM ya está cargado, ejecutar inmediatamente
    loadMenu();
}

// También exportar para uso manual
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadMenu, initializeMenu };
}
