// button.addEventListener('click', () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res)) //Comprobación de seguridad de response.ok en para evitar errores

//         .then(res => res.json())                                // parseamos la información a JSON
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

// const lista = document.getElementById('list')
// console.log(lista)
// button.addEventListener('click', () => {
//     axios({
//         method: 'GET',
//         url: 'https://jsonplaceholder.typicode.com/users'
//     }).then((res) => {
//         console.log(res) 
//         const info = res.data
//         console.log(info)
//         const fragment = document.createDocumentFragment()
//         for (const element of info) {
//             const nombre = element.name
//             const itemList = document.createElement('li') 
//             itemList.textContent = nombre
//             fragment.appendChild(itemList)
//             // console.log(nombre)
//         }
//         lista.appendChild(fragment)
//     }).catch((err) => {
//         console.log(err)
//     });
// })

button.addEventListener('click', () =>{
    axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/users',
        data: {
            title: 'Nuevo post',
            dody: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            userID: 1
        }
    }) .then((res)=>console.log(res))
       .catch((error)=>console.log(error))
})