// //Acceder a través del id para modificar su contenido.
// const titulo = document.getElementById('title')
// console.log(titulo.textContent)
// titulo.textContent = 'DOM - Cómo acceder a los Nodos.'

// //Acceder al elemento a traves de su clase
// const parrafo = document.querySelector('.paragraph')
// console.log(parrafo)
// const span = parrafo.querySelector('span') // utilizamos querySelector, pero desde un elemento, no desde document.
// console.log(span)

// //Acceder a todos querySelectorAll()------
// const parrafos = document.querySelectorAll('.paragraph')
// console.log(parrafos)

// //crear un array para trabajar con ellos
// // const arrayUno = [...document.querySelectorAll('.paragraph')] //Lo convertimos en un array con Spread Operator
// // arrayUno.map((p)=> p.style.color = 'green')  //lo recorremos con un .map() ya que es un arreglo, y le cambiamos su color.
// // console.log(arrayUno)

// const arrayDos = Array.from(document.querySelectorAll('.paragraph'))
// arrayDos.map((p)=> p.style.color = 'blue')  //lo recorremos con un .map() ya que es un arreglo, y le cambiamos su color.
// console.log(arrayDos)

//---------------25: Seleccionar y modificar Atributos!!!-----------------------
//-----------Atributos-----------------------
const titulo = document.getElementById('title')
const labelName = document.getElementById('name')
// console.log(titulo)
// console.log(labelName.getAttribute('type'))// obtenemos el atributo 'type'
// labelName.setAttribute('type', 'date') // modificamos el atributo 'type' por 'date'
// console.log(labelName.getAttribute('type'))

//------------------Clases-----------------------------------
// console.log(labelName);
// titulo.classList.add('titulito', 'caquita')
// titulo.classList.remove('titulito', 'caquita')
// if (titulo.classList.contains('caquita')) 
//     console.log('Titulo contiene la clase caquita')
//     else console.log('Titulo no contiene la clase caquita')

// titulo.classList.replace('title', 'titulo');
// console.log(titulo)

//-------------Atributos directos------------
// console.log(titulo.innerHTML)//recoge las etiquetas HTML que haya en el elemento.
console.log(labelName.value.length)