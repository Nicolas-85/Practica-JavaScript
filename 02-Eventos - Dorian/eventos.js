const button = document.getElementById('button')
const caja = document.getElementById('box')
// console.log(button)
// button.addEventListener('click', ()=>{
//     console.log('CLICK')
// })

caja.addEventListener('mouseenter', ()=> {
    caja.classList.replace('red', 'green')

})
caja.addEventListener('mouseleave', () => {
    caja.classList.replace('green', 'red')
})