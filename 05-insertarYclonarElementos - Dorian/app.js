const list = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent = "I'm a new element"

// list.insertBefore(newElement, list.lastElementChild)
// list.children[0].insertAdjacentElement('beforebegin', newElement)
/*como list es el padre(ul) y lo ponemos en la posición hermano anterior(beforebegin), se sale del ul
por eso le damos un children[0]*/
// list.insertAdjacentElement('afterbegin', newElement) // Se coloca como primer hijo.
// list.insertAdjacentElement('beforeend', newElement) // se coloca como último hijo
// list.lastElementChild.insertAdjacentElement("afterend", newElement)
/*Se sale del ul(padre) porque se coloca como después que termine(hermano siguiente)
y no hay otro hermano para colocar en la lista. Como le colocamos lastElementChild 
lo ubica como un li antes que salga del ul*/
// list.insertAdjacentHTML('afterbegin', '<li>Nuevo Elemento</li>')
// list.insertAdjacentText('beforeend', 'La puta que te parió')

// list.replaceChild(newElement, list.children[1])
//Reemplaza el elemento mencionado, por uno nuevo.

console.dir(newElement)
console.log(newElement)
const date = new Date()
console.log(date.getDate())