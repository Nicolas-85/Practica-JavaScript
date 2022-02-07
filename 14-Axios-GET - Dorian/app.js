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

button.addEventListener('click', () => {

})//continuar con axios-------