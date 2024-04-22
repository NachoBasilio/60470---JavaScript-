Swal.fire({
    title: "Hola",//Sirve para escribir un titulo
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quibusdam, et laudantium veritatis illo officiis consequatur porro ex laborum minus!", //Sirve para agregar texto por debajo
    html: "<h1>Buenaaas</h1>",//Remplaza el texto por html
    icon: "success", //Existen varios iconos en la documentación
    confirmButtonText: "Soy el texto del boton", //Se explica solo
    footer: "LLevo html y voy abajito", //Lo mismo que el de arriba
    width: "¿Que creen que hago?",
    padding: "y yo?",
    //Hay mas de este estilo
    backdrop: true, //Soy el fondo 
    timer: 4000,
    timerProgressBar: true, //Asi damos tiempo y mostramos el tiempo que falta
    toast: false,
    position: 'top-end',//El primero es para un tipo de alerta tostadita, el segundo para donde lo queremos meter sea tostadita o no
    // allowOutsideClick: soy pa que me den click por fuera
    // allowEscapeKey: soy pa que puedan o no cerrar con escape
    // allowEnterKey: soy pa lo mismo que arriba pero con enter 
    // stopKeydownPropagation Nacho me va a explicar 


    input: 'text', //https://sweetalert2.github.io/#input-types
    inputPlaceholder: "Soy un texto de ejemplo",
    inputValue: "",//Soy un valor por defecto
    inputOptions: {
        //Somos opciones por si el input es tipo select
    }
})

//Cuando queremos guardar un valor lo tenemos que igualar a una constante o algo para llevarnos el valor 
// const {value: nombreDeLaVariable} = Swal.fire({...}) pero ahi viene el tema de promesas entonces seria algo asi:
// Swal.fire({...}).then(result => {
//     const nombreDeLaVariable = result.value;
//     // puedes usar nombreDeLaVariable aquí dentro
// });

//Hay mas opciones de personalización disponibles. Eso seria su tarea.