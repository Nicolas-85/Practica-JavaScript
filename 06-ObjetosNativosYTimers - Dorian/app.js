const button = document.getElementById('button')
console.log(button)

// button.addEventListener('click', ()=>{
//     setTimeout(saludar, 3000) 
// })
//Se ejecuta a través de un evento.
// button.addEventListener('click', ()=>{
//     const timeOut = setTimeout(()=>{
//         console.log('Adiós Mundo Cruel')
//     }, 4000)
// })

//Se ejecuta directamente y lo podemos parar.
// const timeOut = setTimeout(()=>{
//     console.log('Adiós Mundo Cruel')
// }, 4000)

// button.addEventListener('click', ()=>{
//     clearTimeout(timeOut)
// })
// const saludar = ()=>{
//     console.log('Hola Mundo!')
// }

const cont = 0
const intervalo = setInterval(()=>{
    console.log(cont)
    cont++
}, 1000)
button.addEventListener('click', ()=>{
    clearInterval(intervalo)
})
