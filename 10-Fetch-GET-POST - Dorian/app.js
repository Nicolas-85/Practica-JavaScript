const button = document.getElementById('button')
// console.log(button)
//------------------------Petición GET con Fetch()---------------------------------------
// button.addEventListener('click', () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res)) //Comprobación de seguridad de response.ok en para evitar errores
//         .then(res => res.json()) // parseamos la información a JSON
//         .then(res => {                                          //acá armamos lo que vamos a hacer con la información. 
//             const fragment = document.createDocumentFragment()  //creamos un fragment para insertar código.
//             const list = document.getElementById('list')        //tomamos la lista de 
//             for(const data of res){                             //armamos un for para recorrer la información
//                 const listItem = document.createElement('li')   // creamos un item li por cada iteración.
//                 listItem.textContent = `${data.id} - ${data.name}` //le ponemos el contenido al li según el id y el nombre del dato.
//                 fragment.appendChild(listItem)                   //abrimos un hijo li con la info por cada iteración, dentro del fragment
//             }
//             list.appendChild(fragment)                           //insertamos el fragment en el ul del HTML.
//         }) // mostramos la información en formato JSON
// })

//----------------------Petición POST con Fetch()------------------------------------------
//Esta es la sintáxis simple.
/*fetch('url', {
    method: 'POST',
    body: los datos que enviamos. Hay que convertirlo con JSON.stringify(datos),
    headers: {
        cabeceras de información sobre lo que estamos enviando: https://developer.mozilla.org/es/docs/WEB/HTTP/Headers
    }
})*/

// console.log(newPost)
// console.log(JSON.stringify(newPost))

button.addEventListener('click', ()=>{
    const newPost = {
        title: 'A new post',
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        userID: 1
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(res=> res.json())
    .then(res=> console.log(res))
})

