const button = document.getElementById('button')
console.log(button)

button.addEventListener('click', ()=>{
    let xhr
    if(window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")
    
    //Con esto, armamos la petición
    xhr.open('GET', "https://jsonplaceholder.typicode.com/users")
    
    //Acá le decimos que hacer con la petición ya que AJAX es asíncrono y debemos darle esa orden.
    xhr.addEventListener('load', (data)=>{
        const dataJSON = JSON.parse(data.target.response) //Se parsea a JSON para poder acceder a él con Js como un objeto, guardandolo en una variable
        const list = document.getElementById('list')      
        for(const userInfo of dataJSON){
            const listItem = document.createElement('li')
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            list.appendChild(listItem)
        }
    })
    //Con esto enviamos la petición
    xhr.send()
})
