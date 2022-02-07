//Acá hacemos una función que devuelve una promesa, todo normal
// const getName = () =>{
//     return new Promise((res, rej)=>{
//         res('Nicolás')
//     })
// }
// getName().then((nombre)=>{console.log(nombre)})

//Acá hacemos la misma función pero la convertimos en asíncrona
// const getName = async() =>{        //Esto lo convierte en asíncrono.
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             res('Nicolás')
//         }, 1500)
//     })
// }

// const sayHello = async()=>{     //función asíncrona
//     const name = await getName() //acá le damos la espera para que se resuelva la promesa anterior.
//     return `Hello ${name}`
// }

// sayHello().then((res)=>{console.log(res)}) //como es una promesa, se resuelve como tal.


//Acá vamos a probar un ejercicio más complejo!
const users = [
    {
        id: 1,
        name: 'Nicolás'
    },
    {
        id: 2,
        name: 'Pedro'
    },
    {
        id: 3,
        name:'Julia'
    }
]

const emails = [
    {
        id: 1,
        email: 'nicolas@gmail.com'
    },
    {
        id: 2,
        email: 'pedro@gmail.com'
    }
]
 
const getUser = async (id)=>{                            
    const user = users.find(usuario => usuario.id == id)    //buscamos un usuario que almacenaríamos en una variable "user"...
        if (!user) throw new Error(`No existe un usuario con el id ${id}`)//como no utilizamos promesa xq el async devuelve una, lanzamos un 
        else return (user)                                                //error en caso de respuesta NO satisfactoria..
}       //directamente, retoramos el resultado satisfactorio.                                 

/*las explicaciones de acá son las mismas que las de la función anterior donde eliminamos la promesa porque el async ya devuelve una. Ante un 
error, lanzamos un objeto error y ante una respuesta afirmativa, la retornamos directamente..*/
const getEmail = (user) => {
    const correoE = emails.find(correo => correo.id == user.id)
        if(!correoE) throw new Error(`No existe un email para el usuario ${user.name}`)
        else return `${correoE.email}`
}

//Manejo del resultado con bloque Try and Catch....:
const getResult = async (id) => {
    try{
        const user = await getUser(id)
        const email = await getEmail(user)
        return `Para el usuario ${user.name}, su correo electrónico es ${email}`
    } catch (error){
        console.log(error)
    }
}

getResult(1).then(res => console.log(res))