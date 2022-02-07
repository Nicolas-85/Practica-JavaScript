//------------------------------Ejercicio 1 de CALBACKS-------------------------------------------------------------------------
// const getUser = (id, cb) => {                    //Esta es una función que recibe dos parámetros, un id y un CALLBACK.....
//     const user = {
//         name: 'Nicolás',
//         id: id
//     }
//     if(id == 2) console.log('User not exist')
//     else cb(null, user)                         //Acá se ejecuta la función CALLBACK *. Cómo se ejecuta, recibe los argumentos: 1° null 
// }                                               //para simular que no hay error. 2° el ususario obtenido
//                                                //son leídos en la llamda de la función más abajo.

// getUser(2, (err, user)=>{                        //Acá estamos llamando a la función pasando el argumento id y el segundo argumento que es 
//     if (err) return console.log(err)             //la función CALLBACK la cual recibe tiene otros dos parámetros, un error si el usuario no existe
//     else console.log(`User name is ${user.name} with id ${user.id}`)//y un ususairo si el mismo existe.    
// })

//--------------------------------Ejecicio 2 CALBACKS--------------------------------------------------------------------------------------
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
 
// const getUser = (id, cb)=>{                            
//     const user = users.find(usuario => usuario.id == id)    //buscamos un usuario que almacenaríamos en una variable "user"...
//     if (!user) console.log(`No existe un usuario con el id ${id}`) //Acá se realiza la comprobación. Si el ususario no existe, se ejecuta el cb* que devuelve
//     else cb(null, user)                              // un error. Si el usuario existe, simulamos el primer argumento con un null,
// }                                                    // y enviamos el ususario obtenido como segundo argumento.

// const getEmail = (user, cb) => {
//     const correoE = emails.find(correo => correo.id == user.id)
//     if(!correoE) console.log(`No existe un email para el usuario ${user.name}`)
//     else cb(null, `El correo del ususario ${user.name} es ${correoE.email}`)
// }

// getUser(1, (err, user)=>{            // Acá llamamos a la función y le damos los argumentos, el 1° es el id y el 2° es un cb* que tiene otros
//     if(err) return console.log(err) // dos parámetros: err y user
//     console.log(user)
//     getEmail(user, (err, res)=>{
//         if(err) return console.log(err)
//         console.log(res)
//     })
// }) 
///// Es imposible manejar este código de callbacks ya que se pueden hacer peticiones 
//y respuestas sin parar.... para esto se crearon las promesas.

// //--------------Resolución de la misma petición con PROMESAS---------------------------------
const getUser = (id)=>{                            
    const user = users.find(usuario => usuario.id == id)    //buscamos un usuario que almacenaríamos en una variable "user"...
    const promise = new Promise((res, rej)=>{               //Creamos la promesa(objeto)
        if (!user) rej(`No existe un usuario con el id ${id}`) //Acá se realiza la comprobación. Si no existe usuario, actua el reject
        else res(user)                                   //si existe el usuario, actua el resolve.
    })
    return promise                                          //ejecutamos la promesa, que también se puede colocar antes de la variable promise.
}

const getEmail = (user) => {
    const correoE = emails.find(correo => correo.id == user.id)
    const promise = new Promise((res, rej)=>{
        if(!correoE) rej(`No existe un email para el usuario ${user.name}`)
        else res(`El correo del ususario ${user.name} es ${correoE.email}`)
    })
    return promise
}
//De esta forma lo que hacemos es agregar un manejo del resultado(.then()) más. Con eso tenemos resuelto el ejercicio.
getUser(2)
    .then(user => getEmail(user))//Resolvemos la promesa de gerUser y le pasamos ese resultado a getEmail como argumento para que resuelva
                                //la suya
    .then(res => console.log(res))//Luego pasamos la resolución de la promesa de getUser.
    .catch(rej => console.log(rej))//Acá el error final.




                