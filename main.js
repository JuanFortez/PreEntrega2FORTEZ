function saludar() {
    let nombre = prompt("Ingresa tu nombre");
    alert("Hola "+nombre+", te doy la bienvenida a mi tienda!");
}

saludar();

let listaCarrito = "";
let precioTotal = 0;
const carrito = [];

const ordenarMenorMayor = () => {
    productos.sort((a, b) => a.precio - b.precio);
    mostrarListaOrdenada();
};

const ordenarMayorMenor = () => {
    productos.sort((a, b) => b.precio - a.precio);
    mostrarListaOrdenada();
};

const mostrarListaOrdenada = () => {
    const listaOrdenada = productos.map(producto => "- "+producto.nombre+" $"+producto.precio);
    alert("Lista de precios: \n(Productos mayores a $7000 tienen un descuento de 25%)\n\n"+listaOrdenada.join("\n"));
};

const comprarProductos = () => {
    let seguirComprando = true;
    let productoCantidad = 0;

    while (seguirComprando) {
        let productoNombre = prompt("¿Qué producto deseas comprar?\n\n" + productos.map(p => `${p.nombre} - $${p.precio}`).join("\n"));
        productoCantidad = parseInt(prompt("¿Cuántos deseas comprar?"));

        while (isNaN(productoCantidad)) {
            alert("Por favor, ingresa un valor válido");
            productoCantidad = parseInt(prompt("¿Cuántos deseas comprar?"));
        }
        

        const producto = productos.find(p => p.nombre.toLowerCase() === productoNombre.toLowerCase());

        if (producto) {
            agregarAlCarrito(producto, productoCantidad);
        } else {
            alert("No tenemos ese producto");
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
};

ordenarMenorMayor();
comprarProductos();


function agradecimiento() {
    alert('Gracias por tu compra!\nVuelve pronto!');
}

agradecimiento();

