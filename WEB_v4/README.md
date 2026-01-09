# 🏭 Industrial AI - Sitio Web de Automatización Industrial

## 📋 Descripción

Sitio web completo con páginas separadas, diseño minimalista estilo Cosmos para empresas de automatización industrial. Incluye diseño responsive, modo claro/oscuro, y botón flotante de WhatsApp.

## 📄 Estructura del Sitio

El sitio está organizado en **5 páginas principales**:

- **index.html** - Página de inicio (Home) con resumen de beneficios y servicios
- **sobre-nosotros.html** - Información completa de la empresa, experiencia y valores
- **servicios.html** - Página de servicios completos y detallados
- **proyectos.html** - Portafolio y casos de éxito
- **contacto.html** - Información de contacto y ubicación

## 🎨 Características

- ✅ **Arquitectura multi-página** - 5 páginas separadas profesionales
- ✅ Diseño minimalista estilo Cosmos
- ✅ Menú de navegación con páginas independientes
- ✅ Modo claro/oscuro con toggle persistente
- ✅ Botón flotante de WhatsApp en todas las páginas
- ✅ Animaciones suaves y parallax
- ✅ Totalmente responsive
- ✅ Contenido editable fácilmente
- ✅ SEO optimizado para cada página

## 📝 Guía de Personalización Rápida

### 1. Cambiar el Nombre de la Empresa

Busca y reemplaza `INDUSTRIAL AI` en **todos los archivos HTML**:
- index.html
- sobre-nosotros.html
- servicios.html
- proyectos.html
- contacto.html

**Ubicaciones principales:**
- Logo en el header
- Footer
- Títulos de página (tag `<title>`)

### 2. Configurar el Botón de WhatsApp

En **TODOS los archivos HTML**, busca y reemplaza el número:

```html
https://wa.me/593999999999
```

**Formato del número:** 
- Sin espacios, guiones ni signos +
- Código de país + número
- Ejemplo: `593999999999` (Ecuador)
- Ejemplo: `34612345678` (España)
- Ejemplo: `5491112345678` (Argentina)

### 3. Editar la Información de Contacto

En **contacto.html** y en los **footers de todas las páginas**:

```html
<!-- Teléfono -->
<a href="tel:+593999999999">Tu número</a>

<!-- Email -->
<a href="mailto:contacto@tuempresa.com">tu@email.com</a>

<!-- Ubicación -->
<p>Tu Ciudad, País</p>
```

**Archivos a modificar:**
- contacto.html (información principal de contacto)
- Footer en todas las páginas HTML

### 4. Personalizar "Sobre Nosotros"

En **sobre-nosotros.html** encontrarás todas las secciones sobre tu empresa:

**Secciones principales:**
- Hero con mensaje principal
- "¿Quiénes Somos?" con características de la empresa
- Tecnologías que dominan
- Industrias que atienden
- Nuestro Enfoque
- Nuestros Valores

Edita cada sección según tu empresa. Esta página es tu carta de presentación.

### 5. Personalizar los Servicios

En **servicios.html**, busca la sección "Servicios Principales":

Cada servicio tiene esta estructura:

```html
<div class="feature-simple">
    <h3>Título del Servicio</h3>
    <p>Descripción del servicio que ofreces.</p>
</div>
```

Puedes:
- Editar los títulos y descripciones existentes
- Agregar más servicios duplicando el bloque
- Eliminar servicios que no ofrezcas

### 6. Editar los Proyectos

En **proyectos.html**, busca la sección "Proyectos Destacados":

Cada proyecto tiene esta estructura:

```html
<div class="module-item">
    <h3>Nombre del Proyecto</h3>
    <span class="module-label">Industria</span>
    <ul>
        <li>Característica 1</li>
        <li>Característica 2</li>
        <li>Característica 3</li>
        <li>Resultado obtenido</li>
    </ul>
</div>
```

### 7. Modificar las Industrias que Atendes

En `sobre-nosotros.html`, sección "Industrias que Atendemos":

```html
<div class="integration">Nombre de Industria</div>
```

Agrega o elimina según tus necesidades.

### 8. Personalizar Colores (Opcional)

En `styles.css`, líneas 6-26, puedes modificar los colores:

```css
:root {
    --bg-color: #000;              /* Color de fondo oscuro */
    --text-color: #fff;            /* Color de texto claro */
    --whatsapp-color: #25D366;     /* Color del botón WhatsApp */
}

body.light-mode {
    --bg-color: #ffffff;           /* Color de fondo claro */
    --text-color: #1a1a1a;         /* Color de texto oscuro */
}
```

### 9. Agregar Imágenes (Opcional)

Para agregar imágenes a los proyectos:

1. Crea una carpeta `images/` en el mismo directorio
2. Guarda tus imágenes allí
3. Agrega el siguiente código dentro de `.module-item`:

```html
<div class="module-item">
    <img src="images/proyecto1.jpg" alt="Descripción" style="width: 100%; border-radius: 6px; margin-bottom: 20px;">
    <h3>Nombre del Proyecto</h3>
    <!-- resto del contenido -->
</div>
```

### 10. Modificar el Hero (Sección Principal)

En `index.html`, líneas 42-51:

```html
<section class="hero">
    <p class="hero-subtitle">Tu Subtítulo</p>
    <h1>Tu Mensaje Principal</h1>
    <p class="hero-description">Tu descripción.</p>
    <!-- Botones -->
</section>
```

## 🎯 Cambios Rápidos Esenciales

### Mínimo para Lanzar tu Sitio:

1. ✅ Cambiar el nombre de la empresa (en todos los HTML)
2. ✅ Configurar el número de WhatsApp (en todos los HTML)
3. ✅ Actualizar email y teléfono de contacto (contacto.html + footers)
4. ✅ Personalizar el mensaje del Hero en index.html
5. ✅ Personalizar información en sobre-nosotros.html
6. ✅ Revisar y editar los servicios en servicios.html
7. ✅ Actualizar proyectos en proyectos.html
8. ✅ Modificar ubicación en contacto.html

## 🚀 Para Implementar

1. Sube los archivos a tu servidor web:
   - `index.html`
   - `sobre-nosotros.html`
   - `servicios.html`
   - `proyectos.html`
   - `contacto.html`
   - `styles.css`
   - `script.js`

2. Asegúrate de que todos los archivos estén en el mismo directorio

3. Abre `index.html` en tu navegador para probar

4. La navegación funcionará automáticamente entre páginas

## 📱 Responsive

El sitio es completamente responsive y se adapta a:
- 📱 Móviles (hasta 480px)
- 📱 Tablets (hasta 768px)
- 💻 Laptops (hasta 1024px)
- 🖥️ Desktop (1200px+)

## ✨ Ventajas del Diseño Multi-Página

- **Mejor SEO**: Cada página puede optimizarse para diferentes palabras clave
- **Carga más rápida**: Solo se carga el contenido necesario
- **URLs limpias**: `/servicios.html`, `/proyectos.html`, `/sobre-nosotros.html`, etc.
- **Mejor experiencia**: Usuarios pueden compartir enlaces específicos
- **Profesional**: Estructura estándar de sitios web corporativos
- **Organización clara**: Información dividida lógicamente por secciones

## 🆕 Novedades en esta Versión

- ✅ Nueva página "Sobre Nosotros" dedicada
- ✅ Home más enfocado en beneficios y llamadas a la acción
- ✅ Mejor organización de la información
- ✅ Navegación más intuitiva con 5 secciones principales
- ✅ Footer actualizado con nuevo enlace

## 🛠️ Soporte Técnico

Si necesitas ayuda adicional con la personalización, considera:
- Contratar un desarrollador web freelance
- Usar plataformas como Fiverr o Upwork
- Consultar tutoriales de HTML/CSS básico

## 📄 Licencia

Este diseño es de uso libre para proyectos comerciales.

---

**¡Éxito con tu empresa de automatización industrial!** 🏭✨
