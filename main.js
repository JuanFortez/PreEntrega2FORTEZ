function saludar() {
    let nombre = prompt("Ingresa tu nombre");
    alert("Hola "+nombre+", te doy la bienvenida a mi tienda!");
}

saludar();

function agradecimiento() {
    alert('Gracias por tu compra!\nVuelve pronto!');
}

let listaCarrito = "";
let precioTotal = 0;
const carrito = [];

const ordenarAlfabeticamente = productos.sort((a, b) => {
    if (a.nombre > b.nombre) {
        return 1;
    } else if (a.nombre < b.nombre) {
        return -1;
    }
    return 0;
});

const listaOrdenada = productos.map(producto => "- "+producto.nombre+": $"+producto.precio); {
    alert("Lista de precios:\n"+listaOrdenada.join("\n"));
}


function comprarProductos () {
    let seguirComprando = true;
    let productoCantidad = 0;

    while (seguirComprando) {
        const filtrarCategoria = prompt("Desea filtrar los productos por categoria? (Sí/No)").toLowerCase(); {
                if (filtrarCategoria === "sí" || filtrarCategoria === "si") {
                    const filtrarCategoria = prompt("Ingresa la categoria:\n - pantalon\n - zapatillas\n - campera");
                    const categoriaFiltrada = productos.filter(producto => producto.categoria === filtrarCategoria);
                    alert("Lista de productos filtrados por categoria:\n(Productos mayores a $7000 tienen un descuento de 25%)\n\n" + categoriaFiltrada.map(producto => "- "+producto.nombre+": $"+producto.precio).join("\n"));

                    let productoNombre = prompt("¿Qué producto deseas comprar?\n" + categoriaFiltrada.map(producto => `${producto.nombre} - $${producto.precio}`).join("\n"));
                    productoCantidad = parseInt(prompt("¿Cuántos deseas comprar?"));

                    const producto = productos.find(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase());

                    if (producto) {
                        agregarAlCarrito(producto, productoCantidad);
                    } else {
                        alert("No tenemos ese producto");
                    }
                    
                } else {
                    let productoNombre = prompt("¿Qué producto deseas comprar?\n(Productos mayores a $7000 tienen un descuento de 25%)\n\n" + productos.map(producto => "- "+producto.nombre+ ": $"+producto.precio).join("\n"));
                    productoCantidad = parseInt(prompt("¿Cuántos deseas comprar?"));

                    while (isNaN(productoCantidad)) {
                        alert("Por favor, ingresa un valor válido");
                        productoCantidad = parseInt(prompt("¿Cuántos deseas comprar?"));
                    }

                    const producto = productos.find(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase());

                    if (producto) {
                        agregarAlCarrito(producto, productoCantidad);
                    } else {
                        alert("No tenemos ese producto");
                    }
                }
        }

        seguirComprando = confirm("¿Desea seguir comprando?");
        
    }

    mostrarCarrito();

};

const agregarAlCarrito = (producto, cantidad) => {
    const productoEnCarrito = carrito.find(item => item.id === producto.id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += cantidad;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: cantidad
        });
    }
};

const mostrarCarrito = () => {
    const productosCarritoDescuento = carrito.map(producto => {
        if (producto.precio >= 7000){
            return {
                nombre: producto.nombre,
                cantidad: producto.cantidad,
                precio: producto.precio - (producto.precio * 0.25)
            };
        } else {
            return {
                nombre: producto.nombre,
                cantidad: producto.cantidad,
                precio: producto.precio
            };
        }
    });

    listaCarrito = "Carrito de compras:\n";
    precioTotal = productosCarritoDescuento.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    productosCarritoDescuento.forEach(item => {
        listaCarrito += `- ${item.nombre} x ${item.cantidad} = $${item.precio * item.cantidad}\n`;
    });
    
    alert(listaCarrito);
    alert("Total a pagar: $" + precioTotal);

    agradecimiento();

};

comprarProductos();
ordenarAlfabeticamente();



