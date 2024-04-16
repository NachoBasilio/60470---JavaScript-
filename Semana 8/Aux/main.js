// let saludador = setTimeout(()=>{
//     console.log("Hola")
// }, 5000)

// clearTimeout(saludador)

// let contador = 1

// let timer = document.getElementById("timer")

// const contandor = setInterval(()=>{
//     timer.innerText = contador
//     contador++
//     if(contador == 10){
//         clearInterval(contandor)
//     }
// }, 1000)




// try {
//     console.log("Hola soy Nacho")

//     setTimeout(()=>{
//         console.log("Hola, soy un set Timeout1")
//     }, 0)

//     setTimeout(()=>{
//         console.log("Hola, soy un set Timeout2")
//     }, 200)

//     console.log("Estoy despues del set Timeout")
// } catch (error) {
//     console.error(error)
// } finally {
//     console.log("Finally")
// }

// const promesa = new Promise((resolve, reject)=>{
//     resolve("Me tatue")
//     reject("No me tatue")
// })


fetch("./data.json")
.then(res => res.json())
.then(data => console.log(data))


const funcionQueTraeValoresDelLocal = async () =>{
    const results = await fetch("./data.json")
    const data = await results.json()

    console.log(data)
}

funcionQueTraeValoresDelLocal()