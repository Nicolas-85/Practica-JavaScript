const form = document.getElementById('form')
const character = document.getElementById('character')
const table = document.getElementById('table')
console.log('Hola Mundo')
const getData = (id)=> {
    let xhr
    if (window.XMLHttpRequest) xhr =  new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")
    
    if(id == undefined){
        xhr.open('GET', 'marvel.php')
        xhr.addEventListener('load', (data)=>{
            // const dataJSON = JSON.parse(data)
            // console.log(dataJSON)
        })
    } else {

    }
    xhr.send()
}

getData()