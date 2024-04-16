const URL = "https://pokeapi.co/api/v2/pokemon?limit=251"
const main = document.getElementById("main")

const crearPokemon = (data)=>{
    const contenedor = document.createElement("div")

    const contenedorTipos = document.createElement("div")
    
    const nombreDOM = document.createElement("h2")
    const tipo1 = document.createElement("h3")
    const tipo2 = document.createElement("h3")
    const imagen = document.createElement("img")
  

    nombreDOM.innerText = data.name.charAt(0).toUpperCase() + data.name.slice(1)
    tipo1.innerText = data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1)
    tipo2.innerText = data?.types[1]?.type.name.charAt(0).toUpperCase() + data.types[1]?.type.name.slice(1) || ""

    imagen.src = data.sprites.other.home.front_shiny



    tipo1.classList.add( data.types[0].type.name)
    if(data.types[1]?.type.name){
        tipo2.classList.add(data.types[1]?.type.name)
    }

    contenedor.appendChild(nombreDOM)
    contenedorTipos.appendChild(tipo1)
    contenedorTipos.appendChild(tipo2)
    contenedor.appendChild(contenedorTipos)
    contenedor.appendChild(imagen)

    contenedor.classList.add("container")
    contenedorTipos.classList.add("containerTipos")

    main.appendChild(contenedor)
}

const llamarDeAUno = async (array) =>{
    try {
        const arrayDePromesas = await Promise.all(array.map(async url =>{
            const result = await fetch(url)
            const data = await result.json()
            return data
        }))
        arrayDePromesas.forEach(pokemon => {
            console.log(pokemon)
            crearPokemon(pokemon)
        })
    } catch (error) {
        console.error(error)
    }
}


const llamarApi = async () => {
    try {
        const result = await fetch(URL)
        const data = await result.json()
        const urls = data.results.map(pokemon => pokemon.url)
        llamarDeAUno(urls) 
    } catch (error) {
        console.error(error)
    }
}

llamarApi()

// const URL = "https://pokeapi.co/api/v2/pokemon"
// const main = document.getElementById("main")

// const llamarPokemonUnico = async (array)=>{
//     const arrayTerminado = await Promise.all(array.map(async data => {
//         const result = await fetch(data.url);
//         const datos = await result.json();
//         return datos;
//     }));
//     arrayTerminado.forEach(data =>{
//         crearPokemon(data)
//     })

// }

// const llamarPokemon = async (limite) => {
//     const result = await fetch(URL+"?limit="+limite)
//     const data = await result.json()
//     llamarPokemonUnico(data.results)

// }



// llamarPokemon(251)



