//Función tradicional para realizar una petición1

// const getUserFromGithub = (username) => {
//     console.log('empiezo')
//     let url = 'https://api.github.com/users/' + username
//     const resp = fetch(url)
//     const datos = resp.JSON()
//     console.log(datos)
//     console.log('termino')
//     return datos
// }
// getUserFromGithub('frenchita')

//Async: función asíncrona para realizar la petición1
// const getUserFromGithub =  async (username) => { //convertimos la función a asíncrona.
//     console.log('empiezo')
//     let url = `https://api.github.com/users/${username}` // asigno la URL a una variable y le asigno el concateno "username"
//     const resp =  await fetch(url) //  await: forzamosla resolución y guardamos en una variable la petición al end point con fetcj()
//     const datos =  await resp.json() // await: forzamosla resolución y parseamos los datos a json y los guardamos en una variable.
//     // console.log(datos)  //muestro los datos... 
//     console.log('termino')
//     return datos
// }

// getUserFromGithub('frenchita')
//     .then((res)=> console.log(res)) //como async devuelve una promesa podemos manejarla con .then() .cathc()

//Ejemplo de petición2 con promesas:
// const logFetch = url => {
//     return fetch(url)
//         .then((res)=> res.json())
//         .then((res)=>console.log(res))
//         .catch((err)=> console.log('fetch rechazado', err))
// }
// logFetch('https://api.github.com/users/helloworld')

//Otro ejemplo con async para petición2. Ya que devuelve una promesa, podemos tratarlo con un bloque try catch.
// const logFetch = async url => {
//     try {
//         const respuesta = await fetch(url)
//         console.log(await respuesta.text())
//     }
//     catch (err){
//         console.log('fetch failed', err)
//     }
// }

// logFetch('https://api.github.com/users/helloworld')

//Ejecricio 1: como voy a utilizar fetch() que encapsula el tema de las promesas, no necesito declarar el obj Promise, ni res ni rej.
// const obtenerUsuarios = url =>{
//     return fetch(url)
//         .then((res)=> res.json()).then((res) => console.log(res))
//         .catch((err) => console.log(`Fetch rechazado ${err}`))
        
// }
// obtenerUsuarios('https://jsonplaceholder.typicode.com/users')

//EJERCICIO 2: HACER LA LLAMADA CON FUNCION ASYNC
// const obtenerUsuario2 = async url => { 
//     try {
//         const llamada = await fetch(url)
//         const respuesta = await llamada.json()
//         console.log(respuesta)
//     } catch (error) {
//         console.log(`petición rechazada ${error}`)
//     }
// }
// obtenerUsuario2('https://jsonplaceholder.typicode.com/users')

//EJERCIIO 3 y 4: TRAER LOS USUARIOS Y MOSTRARLOS EN UN ARREGLO.
// const ejercicioTres = async () => {   
//     const url = 'https://jsonplaceholder.typicode.com/users' 
//     try {
//         const llamada = await fetch(url)
//         const respuesta = await llamada.json()
//         console.log(respuesta)
//         let listaNombres = []
//         respuesta.forEach(element => {
//             listaNombres.push(`Id: ${element.id}, nombre: ${element.name}, nombre de usuario: ${element.username}`)
//         });
//         console.log(listaNombres)
//     } catch (error) {
//         console.log(`petición rechazada ${error}`)
//     }
// }
// ejercicioTres()