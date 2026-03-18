document.addEventListener('DOMContentLoaded', () => {
    // Solo ejecuta esta lógica si estamos en la página de categoría
    if (document.body.classList.contains('categoria-page')) {
        const urlParams = new URLSearchParams(window.location.search);
        const categoriaKey = urlParams.get('cat'); // Obtiene 'fruta', 'embutidos', etc.

        if (categoriaKey && categoriasData[categoriaKey]) {
            const data = categoriasData[categoriaKey];
            
            // Actualiza el título y descripción del HERO
            document.getElementById('categoria-titulo').textContent = data.titulo;
            document.getElementById('categoria-descripcion').textContent = data.descripcion;
            document.getElementById('page-title').textContent = data.titulo + ' - Spar Express Monelos';

            // Actualiza la imagen de fondo del HERO
            const heroElement = document.querySelector('.hero-categoria');
            if (heroElement && data.fondo) {
                heroElement.style.backgroundImage = `url('${data.fondo}')`;
            }

            // Aquí podrías cargar los productos específicos de la categoría
            // Por ahora, usamos los ejemplos estáticos, pero esto es donde iría la lógica.
            // Ejemplo: cargarProductos(categoriaKey);
        } else {
            // Si no se encuentra la categoría, mostrar un mensaje por defecto o redirigir
            document.getElementById('categoria-titulo').textContent = "Categoría No Encontrada";
            document.getElementById('categoria-descripcion').textContent = "Lo sentimos, la categoría solicitada no está disponible.";
        }
    }
});

// Botón Volver Arriba
const btnSubir = document.getElementById("btnSubir");

// Mostrar el botón al bajar 300px
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnSubir.style.display = "block";
    } else {
        btnSubir.style.display = "none";
    }
});

// Al hacer clic, subir suavemente
btnSubir.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
