// DOM - Crear e Insertar elementos
// Crear un elemento: document.createElement(element)
//Escribir texto en un elemento: element.textContent = texto
//Escribir HTML en un elemento: element.innerHTML = código HTML
const days = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']

const title = document.getElementById('title')
const dayList = document.getElementById('daysList')
const selectDays = document.getElementById('daysSelect')

// const listaItems = document.createElement('li')
// listaItems.textContent = 'lunes'

// dayList.appendChild(listaItems)
// console.log(listaItems.textContent)

const fragment = document.createDocumentFragment()

for (const day of days) {
    const itemList = document.createElement('li') 
    itemList.textContent = day
    fragment.appendChild(itemList)
}
// console.log(fragment)
dayList.appendChild(fragment)


const frament2 = document.createDocumentFragment()
for (const day of days) {
    const itemList = document.createElement('OPTION')
    itemList.setAttribute('value', day)
    itemList.textContent = day
    frament2.appendChild(itemList)
}
// console.log(frament2)
selectDays.appendChild(frament2)