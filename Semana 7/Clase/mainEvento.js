//mousedown/mouseup: Crea un botón en tu HTML. Cuando el usuario haga clic en él (mousedown) y luego suelte el botón (mouseup), cambia el color de fondo del botón.
 
const boton = document.querySelector("#boton")

// boton.addEventListener("mousedown", ()=>{
//     boton.classList.add("red")
//     boton.classList.remove("green")
// }) 

// boton.addEventListener("mouseup", ()=>{
//     boton.classList.add("green")
//     boton.classList.remove("red")
// }) 

//mouseover/mouseout: Agrega un elemento en tu página. Cuando el usuario mueva el ratón sobre él (mouseover), muestra un mensaje como “¡Estás encima de la imagen!” y cuando el ratón salga del elemento (mouseout), muestra “¡El ratón se fue!”.

// boton.addEventListener("mouseover", (event)=>{
//     console.log(event.target)
//     boton.classList.add("red")
//     boton.classList.remove("green")
// }) 

// boton.addEventListener("mouseout", ()=>{
//     boton.classList.add("green")
//     boton.classList.remove("red")
// }) 

//mousemove: Crea un div en tu página. Muestra las coordenadas del ratón dentro del div mientras el usuario mueve el ratón sobre él.

const contenedorMayor = document.getElementById("contenedor")
contenedorMayor.addEventListener("mousemove", (evento)=>{
    contenedorMayor.innerHTML = `Coordenada en x ${evento.x}, Coordenadas en y ${evento.y}`
})

//click: Agrega un botón y un párrafo en tu HTML. Cuando el usuario haga clic en el botón, cambia el texto del párrafo.

boton.addEventListener("click", (evento)=>{
    evento.target.innerText = "Me tocaste"

})

//keydown: Crea un input de texto. Cuando el usuario presione una tecla, muestra la tecla presionada en otro elemento (por ejemplo, un párrafo).

//keyup: Similar al anterior, pero muestra la tecla cuando el usuario suelte la tecla.

//change: Agrega un input de tipo “checkbox”. Cuando el usuario marque o desmarque la casilla, muestra un mensaje como “¡Checkbox seleccionado!” o “¡Checkbox deseleccionado!”.

//input: Crea un input de texto. Muestra el contenido del input en tiempo real mientras el usuario escribe.

//Submit: Crea un formulario con un botón de envío (submit). Cuando el usuario complete el formulario y haga clic en el botón, muestra un mensaje como “Formulario enviado correctamente”.


