const elementoPrincipal = document.getElementById("main")
const botonCarrito = document.getElementById("carrito")
const carritoFisico = document.getElementById("carritoFisico")
const productosDOM = document.getElementById("productos")
const arrayProductos = []

class CarritoDeCompras {
    constructor() {
        this.articulos = JSON.parse(localStorage.getItem('carrito')) || [];
    }
    
    agregarProducto(producto) {
        const productoExistente = this.articulos.find(prod => prod.titulo === producto.titulo);
        
        if(productoExistente){
            productoExistente.cantidad++;
        }else{
            producto.cantidad = 1;
            this.articulos.push(producto);
        }

        this.guardarCarrito();
    }

    calcularTotal() {
        let total = 0;
        for (const producto of this.articulos) {
            total += producto.precio * producto.cantidad;
        }
        return total;
    }

    guardarCarrito() {
        localStorage.setItem('carrito', JSON.stringify(this.articulos));
    }

    limpiarCarrito() {
        localStorage.removeItem('carrito');
        this.articulos = [];
    }
}

const miCarrito = new CarritoDeCompras()

function crearTarjetaDeProducto({titulo, precio, imagen, descripcion}){
    elementoPrincipal.innerHTML += `
        <div class="contenedorImagen">
            <img src="${imagen}" />
            <div>  
                <div>
                    <h3 class="titulo">${titulo}</h3>
                    <p class="desc">${descripcion}</p>
                </div>
                <div class="contenedorPrecioYBoton">
                    <p class="precio">${precio}</p>
                    <button class="agregar">Comprar</button>
                </div>
            </div>
        </div>
    `
}

fetch("./info.json")
.then(datos => {
    if (!datos.ok) {
        throw new Error(`¡Error HTTP! estado: ${datos.status}`);
    } else {
        return datos.json();
    }
})
.then(productos => {
    productos.articulos.map(producto =>{
        crearTarjetaDeProducto(producto)
    })
    agregarEvento()
})
.catch(e => {
    console.log('Hubo un problema con la operación fetch: ' + e.message);
});

function mostrarCarrito (){
    carritoFisico.innerHTML = ""

    miCarrito.articulos.map(producto=>{
        carritoFisico.innerHTML += `<div class="prodEnCarrito">
            <p class="tituloProducto">${producto.titulo}</p>
            <div class="precioYCantidad">
                <p>$ ${producto.precio}</p>
                <p>${producto.cantidad}</p>
            </div>
        </div>`
    })

    carritoFisico.innerHTML += `<div>
    <h3>Total: ${miCarrito.calcularTotal()}</h3>
    <button id="borrar">Terminar Compra</button>
    </div>`

    const borrar = document.getElementById("borrar")
    borrar.addEventListener("click", ()=>{
        miCarrito.limpiarCarrito();
        mostrarCarrito()
    })
}

function agregarEvento (){
    const botones = document.getElementsByClassName("agregar")
    const arrayBotones = Array.from(botones)

    arrayBotones.map(boton=>{
        boton.addEventListener("click", (e)=>{
            let precio = Number(e.target.parentElement.children[0].innerText)
            let titulo = e.target.parentElement.parentElement.children[0].children[0].innerText
            console.dir(titulo)

            miCarrito.agregarProducto({
                titulo,
                precio,
                cantidad: 0,
            })

            mostrarCarrito()
        })
    })

}

botonCarrito.addEventListener("click", ()=>{
    carritoFisico.classList.toggle('active')
    mostrarCarrito()
})