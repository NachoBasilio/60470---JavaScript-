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
   if(!datos.ok){
    throw new Error("Error al traer los datos")
   }else{
    return datos.json() 
   }
})
.then(productos => {
    productos.articulos.forEach(producto => {
        crearTarjetaDeProducto(producto)
    })
    agregarEvento()
})
.catch(e => {
    console.error("Hubo un error al operar con fetch " + e.message)
})

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
        <button id="cancelar">Cancelar Compra</button>
    </div>`

    const cancelar = document.getElementById("cancelar")
    cancelar.addEventListener("click", ()=>{
        miCarrito.limpiarCarrito();
        Swal.fire({
            icon: "error",
            title: "Su compra fue cancelada con éxito",
            text: "Espero que vuelva pronto.",
            footer: '<a href="#">Siempre lo estaremos esperando.</a>'
        });
        mostrarCarrito()
    })

    const borrar = document.getElementById("borrar")
    borrar.addEventListener("click", ()=>{
        miCarrito.limpiarCarrito();
        Swal.fire({
            title: "¡Compra realizada!",
            text: "El envió se realizara en la próxima semana.",
            icon: "success"
        });
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
            
            miCarrito.agregarProducto({
                titulo,
                precio,
                cantidad: 0,
            })
            Swal.fire({
                title: `¡Su producto ${titulo} se agrego correctamente!`,
                icon: "success",
                width: "350px"
              });
            mostrarCarrito()
        })
    })

}

botonCarrito.addEventListener("click", ()=>{
    carritoFisico.classList.toggle('active')
})