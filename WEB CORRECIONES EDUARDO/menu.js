// ==========================================
// ARCHIVO: menu.js
// Guardar en la raíz del proyecto
// Versión: Dropdown en hover + Click directo a página + SUBMENÚS MULTINIVEL
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
            <a href="nosotros.html">Nosotros</a>
            
            <!-- Dropdown SERVICIOS con link clickeable -->
            <div class="nav-dropdown">
                <a href="servicios.html" class="nav-link">
                    Servicios
                    <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </a>
                <div class="dropdown-menu">
                    <a href="servicios.html">Automatización y Control Industrial</a>
                    <a href="servicios.html">Ingeniería de Procesos</a>
                    <a href="servicios.html">Ingeniería de Diseño</a>
                    <a href="servicios.html">Proyectos IoT / Industria 4.0</a>
                    <a href="servicios.html">Oil & Gas / GNL</a>
                    <a href="servicios.html">Puesta en Marcha de Instalaciones Industriales</a>
                    <a href="servicios.html">Modelado 3D Industrial</a>
                    <a href="servicios.html">Integración de Maquinaria Industrial</a>

                </div>
            </div>
            
            <!-- Dropdown PRODUCTOS con SUBMENÚS MULTINIVEL -->
            <div class="nav-dropdown">
                <a href="productos.html" class="nav-link">
                    Productos
                    <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </a>
                <div class="dropdown-menu">
                    <!-- REPUESTOS Y COMPONENTES -->
                    <div class="dropdown-item-with-submenu">
                        <a href="#repuestos" class="dropdown-item-link">
                            <span>Repuestos y Componentes</span>
                            <svg class="submenu-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </a>
                        <div class="submenu-level-2">
                            <a href="productos.html#plcs">PLCs</a>
                            <a href="productos.html#hmi-scada">HMI y SCADA</a>
                            <a href="productos.html#controladores">Controladores Programables</a>
                            <a href="productos.html#modulos">Módulos de E/S</a>
                            <a href="productos.html#redes">Redes Industriales</a>
                            <a href="productos.html#fuentes">Fuentes de Alimentación</a>
                        </div>
                    </div>
                    
                    <div class="dropdown-divider"></div>
                    
                    <!-- INSTRUMENTACIÓN Y MEDICIÓN -->
                    <div class="dropdown-item-with-submenu">
                        <a href="#instrumentacion" class="dropdown-item-link">
                            <span>Instrumentación y Medición</span>
                            <svg class="submenu-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </a>
                        <div class="submenu-level-2">
                            <a href="productos.html#sensores">Sensores</a>
                            <a href="productos.html#valvulas-control">Válvulas de Control</a>
                            <a href="productos.html#actuadores">Actuadores</a>
                            <a href="productos.html#valvulas-manuales">Válvulas Manuales</a>
                            <a href="productos.html#medidores">Medidores de Flujo</a>
                            <a href="productos.html#transmisores">Transmisores</a>
                            <a href="productos.html#manometros">Manómetros</a>
                        </div>
                    </div>
                    
                    <div class="dropdown-divider"></div>
                    
                    <!-- VARIADORES Y POTENCIA -->
                    <div class="dropdown-item-with-submenu">
                        <a href="#variadores" class="dropdown-item-link">
                            <span>Variadores y Potencia</span>
                            <svg class="submenu-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </a>
                        <div class="submenu-level-2">
                            <a href="productos.html#variadores-frecuencia">Variadores de Frecuencia</a>
                            <a href="productos.html#arrancadores">Arrancadores Suaves</a>
                            <a href="productos.html#servomotores">Servomotores y Drivers</a>
                            <a href="productos.html#contactores">Contactores y Relés</a>
                        </div>
                    </div>
                    
                    <div class="dropdown-divider"></div>
                    
                    <!-- CONECTIVIDAD IoT -->
                    <div class="dropdown-item-with-submenu">
                        <a href="#iot" class="dropdown-item-link">
                            <span>Conectividad IoT</span>
                            <span class="category-badge-menu">NUEVO</span>
                            <svg class="submenu-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </a>
                        <div class="submenu-level-2">
                            <a href="productos.html#iot-lorawan">Equipos IoT / LoRaWAN</a>
                            <a href="productos.html#gateways">Gateways Industriales</a>
                            <a href="productos.html#modulos-comunicacion">Módulos de Comunicación</a>
                            <a href="productos.html#monitoreo">Sistemas de Monitoreo Remoto</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <a href="sectores.html">Sectores</a>
            <a href="blog.html">Blog</a>
            <a href="proyectos.html">Proyectos</a>
            <a href="contacto.html">Contacto</a>
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

/* ========================================
   FUNCIONALIDAD ADICIONAL PARA MENÚ MULTINIVEL
   Agregar este código al final de tu archivo menu.js
   o después de la función initializeMenu()
   ======================================== */

// Función para manejar submenús en móviles
function initSubmenusMobile() {
    // Solo en dispositivos móviles
    if (window.innerWidth <= 968) {
        const itemsConSubmenu = document.querySelectorAll('.dropdown-item-with-submenu');
        
        itemsConSubmenu.forEach(item => {
            const link = item.querySelector('.dropdown-item-link');
            
            if (link) {
                // Remover eventos anteriores para evitar duplicados
                link.removeEventListener('click', handleSubmenuClick);
                
                // Agregar nuevo evento
                link.addEventListener('click', handleSubmenuClick);
            }
        });
    }
}

// Manejador de clicks en items con submenu
function handleSubmenuClick(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const parentItem = e.currentTarget.closest('.dropdown-item-with-submenu');
    
    if (parentItem) {
        // Toggle del submenu
        parentItem.classList.toggle('active');
        
        // Cerrar otros submenus abiertos
        const allItems = document.querySelectorAll('.dropdown-item-with-submenu');
        allItems.forEach(item => {
            if (item !== parentItem) {
                item.classList.remove('active');
            }
        });
    }
}

// Inicializar al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    // Esperar a que el menú se cargue
    setTimeout(() => {
        initSubmenusMobile();
    }, 100);
});

// Re-inicializar al cambiar tamaño de ventana
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Cerrar todos los submenus al cambiar de móvil a desktop
        if (window.innerWidth > 968) {
            const allItems = document.querySelectorAll('.dropdown-item-with-submenu');
            allItems.forEach(item => {
                item.classList.remove('active');
            });
        } else {
            initSubmenusMobile();
        }
    }, 250);
});

console.log('Funcionalidad de submenús multinivel inicializada');