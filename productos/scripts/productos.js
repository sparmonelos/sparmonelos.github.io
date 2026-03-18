function cargarProductos(categoria) {
    const contenedor = document.getElementById("contenedor-productos");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    let listaProductos;
    switch(categoria) {
        case "alimentacion": listaProductos = productosAlimentacion; break;
        case "fruta": listaProductos = productosFruta; break;
        case "embutidos": listaProductos = productosEmbutidos; break;
        case "lacteos": listaProductos = productosLacteos; break;
        case "congelados": listaProductos = productosCongelados; break;
        case "bebidas": listaProductos = productosBebidas; break;
        case "limpiezaehigiene": listaProductos = productosLimpiezaehigiene; break;
        case "latinos": listaProductos = productosLatinos; break;
        // añade más categorías aquí
        default: listaProductos = [];
    }

    listaProductos.forEach(producto => {
        const productoHTML = `
        <div class="producto-item">
            <div class="producto-img-container">
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>
            <div class="producto-info">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <span class="producto-precio">${producto.precio}</span>
            </div>
        </div>
        `;
        contenedor.innerHTML += productoHTML;
    });
}

document.addEventListener("DOMContentLoaded", function(){
    const params = new URLSearchParams(window.location.search);
    const categoria = params.get("cat");
    if(categoria) cargarProductos(categoria);
});