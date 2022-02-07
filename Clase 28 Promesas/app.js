// const promesa = new Promise((res, rej)=>{
//     setTimeout(() => {
//         if(true) res('Promesa satisfactoria')
//         else rej('Promesa rechazada')
//     }, 2000);
// })

// promesa 
//     .then((res)=> console.log(`La resolución de la promesa es: ${res}`))
//     .catch((rej)=> console.log(`La promesa no se resolvió como queríamos: ${rej}`))

// const promesa2 = new Promise((res, rej)=>{
//     setTimeout(() => {
//         if(false) res('Promesa satisfactoria')
//         else rej('Promesa rechazada')
//     }, 1000);
// })
    
// promesa2
//     .then((res)=> console.log(`La resolución de la promesa es: ${res}`))
//     .catch((rej)=> console.log(`La promesa no se resolvió como queríamos: ${rej}`))

const promesa3 = new Promise((res, rej)=>{
    random = parseInt(Math.random() * (100 - 0) + 0)   
    if(random % 2 == 0) res(`El número ${random} es par`)
    else rej(`El número ${random} es impar`)
})

promesa3
    .then((res)=> console.log(`Promesa aprobada: ${res}`))
    .catch((rej)=> console.log(`Promesa rechazada: ${rej}`))

