/*
Swal.fire({
    title: "¿Cual es tu pokemon favorito?",
    html: "<p>Elige bien...</p>",
    // text: "Es el mejor pokemon del mundo, 10 de aca 7 personas lo afirma",
    icon: "success",
    confirmButtonText: "Confirmo",
    // footer: "<h1>hola a todos</h1>",
    // width: "2200px",
    padding: "10px",
    backdrop: true,
    // timer: 5000,
    // timerProgressBar: true,
    // toast: true,
    // position: "bottom-end",
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    stopKeydownPropagation: false,
    input: "range",
    inputAttributes: {
        min: "1",
        max: "100",
        step: "5"
    },

    showConfirmButton: true,
    confirmButtonColor: "#324123",
    confirmButtonAriaLabel: "Esats aceptando que este es tu pokemon favorito",

    showCancelButton: true,
    cancelButtonColor:"#324123",
    //cancelButtonText:
    //cancelButtonAriaLabel: Para ayudar a la gente que no puedan ver bien 

    imageUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/tinkaton.png",
    imageWidth: "200px",
    //imageHeight:
    ImageAlt: "una imagen de tinkaton"
}).then(data => {
    console.log(data.value)
})
*/

/*
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
    },

    //showConfirmButton: Adivinen
    //confirmButtonColor:
    //confirmButtonAriaLabel: Para ayudar a la gente que no puedan ver bien 

    //showCancelButton: Adivinen
    //cancelButtonColor:
    //cancelButtonText:
    //cancelButtonAriaLabel: Para ayudar a la gente que no puedan ver bien 

    //imageUrl:
    //imageWidth:
    //imageHeight:
    //ImageAlt:
})

//Cuando queremos guardar un valor lo tenemos que igualar a una constante o algo para llevarnos el valor 
// const {value: nombreDeLaVariable} = Swal.fire({...}) pero ahi viene el tema de promesas entonces seria algo asi:
// Swal.fire({...}).then(result => {
//     const nombreDeLaVariable = result.value;
//     // puedes usar nombreDeLaVariable aquí dentro
// });

//Hay mas opciones de personalización disponibles. Eso seria su tarea. 
*/





















let alumnos = [
    { nombre: 'Juan', apellidos: 'Pérez', universidad: 'UNAM', facultad: 'Ingeniería', pokemonFavorito: 'Pikachu', notaPromedio: 8.5 },
    { nombre: 'Ana', apellidos: 'Gómez', universidad: 'ITESM', facultad: 'Negocios', pokemonFavorito: 'Charizard', notaPromedio: 9.1 },
    { nombre: 'Carlos', apellidos: 'Rodríguez', universidad: 'IPN', facultad: 'Ciencias', pokemonFavorito: 'Bulbasaur', notaPromedio: 8.7 },
    { nombre: 'María', apellidos: 'Martínez', universidad: 'UAM', facultad: 'Derecho', pokemonFavorito: 'Squirtle', notaPromedio: 8.9 },
    { nombre: 'Luis', apellidos: 'Hernández', universidad: 'UNAM', facultad: 'Medicina', pokemonFavorito: 'Jigglypuff', notaPromedio: 9.3 },
    { nombre: 'Sofía', apellidos: 'López', universidad: 'ITESM', facultad: 'Arquitectura', pokemonFavorito: 'Eevee', notaPromedio: 8.8 },
    { nombre: 'Daniel', apellidos: 'González', universidad: 'IPN', facultad: 'Química', pokemonFavorito: 'Snorlax', notaPromedio: 9.0 },
    { nombre: 'Isabel', apellidos: 'Ramírez', universidad: 'UAM', facultad: 'Psicología', pokemonFavorito: 'Psyduck', notaPromedio: 8.6 },
    { nombre: 'Jorge', apellidos: 'Morales', universidad: 'UNAM', facultad: 'Física', pokemonFavorito: 'Gengar', notaPromedio: 9.2 },
    { nombre: 'Laura', apellidos: 'Torres', universidad: 'ITESM', facultad: 'Comunicación', pokemonFavorito: 'Mewtwo', notaPromedio: 9.4 }
];



function backendDeAlumnos () {
    return new Promise((Resolve, Reject)=>{
        if(alumnos.length === 0){
            Reject("No tenes datos de los alumnos")
        }

        setTimeout(()=>{
            Resolve(alumnos) 
        }, 2000)

    })
}
async function llamadoraDeAlumnos(){

    const valores = await backendDeAlumnos()
    console.log(valores)

}

llamadoraDeAlumnos()


