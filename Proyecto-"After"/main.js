const Productos = ["Lapiceras", "Borradores", "Regla", "Lapiz", "Sandias"]



const Carrito = JSON.parse(localStorage.getItem("carrito")) || []


const ContenedorDeProductos = document.getElementById("productos")
const ContenedorDeCarrito = document.getElementById("carrito")


Productos.forEach((producto)=>{
    ContenedorDeProductos.innerHTML += `
    <div>
        <h3> ${producto} </h3>
        <button class="Boton-agregar"> Agregar </button>
    </div>`
})


const ActualizadoraDeCarrito = () => {
    ContenedorDeCarrito.innerHTML = ""
    
    Carrito.forEach((producto)=>{
        ContenedorDeCarrito.innerHTML +=`
        <div>
            <h3> ${producto.producto} </h3>
            <p> ${producto.cantidad} </p>
            <button class="Boton-borrador"> Borrar </button>       
        </div>`
    })
    const BotonesBorrar = document.getElementsByClassName("Boton-borrador")

    const BotonesBorrarArray = Array.from(BotonesBorrar) 
    
    BotonesBorrarArray.forEach((boton)=>{
        boton.addEventListener("click", agregadoraDeBorrador)
    })

    localStorage.setItem("carrito", JSON.stringify(Carrito))

    console.table(Carrito)

}

const agregadoraDeBorrador = (e)=>{
    const elProductoElegido = e.target.parentElement.children[0].innerText
    const Padre = e.target.parentElement
    Padre.remove()
    
    const ArrayDeProductos = Carrito.map(producto => producto.producto)
    const indice = ArrayDeProductos.indexOf(elProductoElegido)

    
    if(Carrito[indice].cantidad == 1){
        Carrito.splice(indice, 1)
    }else{
        Carrito[indice].cantidad -= 1
    }
    
    ActualizadoraDeCarrito()         
}

const agregador = (producto) => {
    const buscador = Carrito.find((productoCarrito)=>{
        return productoCarrito.producto == producto.producto
    })

    if(buscador != undefined){
        const ArrayDeProductos = Carrito.map(producto => producto.producto)
        const indice = ArrayDeProductos.indexOf(producto.producto)
        Carrito[indice].cantidad += 1
    }else{
        Carrito.push(producto)
    }

    ActualizadoraDeCarrito()    
}

const BotonesAgregar = document.getElementsByClassName("Boton-agregar")

const BotonesAgregarArray = Array.from(BotonesAgregar) 

BotonesAgregarArray.forEach((boton)=>{
    boton.addEventListener("click", (e)=>{
        const elProductoElegido = e.target.parentElement.children[0].innerText

        agregador({
            producto: elProductoElegido,
            cantidad: 1
        })
    })
})

document.addEventListener("DOMContentLoaded", ()=>{
    ActualizadoraDeCarrito()
})