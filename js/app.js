let carrito = [];
let carritoDiv
const guardarCarrito = (clave, valor) => {localStorage.setItem(clave,valor)};


function agregarAlCarrito(nombre, precio) {
    let producto = { nombre: nombre, precio: precio };
    carrito.push(producto);
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

function actualizarCarrito() {
    carritoDiv = document.getElementById("carrito");
    carritoDiv.innerHTML = "";

if (carrito.length === 0) {
    carritoDiv.innerHTML = "<p>No hay productos en el carrito</p>";
    } else {
    let total = 0;
    
for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        total += producto.precio;
    
        carritoDiv.innerHTML += "<p>" + producto.nombre + " - $" + producto.precio + "</p>";
    }
    carritoDiv.innerHTML += '<p class="texto-carrito"> Cantidad de artículos:'+ carrito.length + "</p>";
    carritoDiv.innerHTML += '<p class="texto-carrito">Total: $' + total + "</p>";
    }
}

guardarCarrito("carrito", JSON.stringify(carritoDiv))