const buttonImg =  document.getElementById('button-img')
const buttonPdf =  document.getElementById('button-pdf')
// const img = document.getElementById('img')
const a = document.getElementById('pdf')

//---------------De esta manera mostramos una imagen con Fetch()-------------------------------------------------
buttonImg.addEventListener('click', () => {
    fetch('Julita.jpg')                    //Esto ya devuelve una promesa.
        .then(res => res.blob()) //Aquí tenemos la respuesta de la promesa. Es una imagen que sólo se podrá ver en el entorno local. 
        .then(img => {  //Como ya tenemos la rta que la nombramos "img"(o caca), lo que hacemos es asignarla al elemento img(html) a través del atributo src, para
            document.getElementById('img').src = URL.createObjectURL(img) //eso utilizamos el URL.createObjetURL() que crea un link que es válido
        })                       //para ver. 
    })

//--------------De esta manera mostramos un pdf con Fetch()-------------------------------------------------------
buttonPdf.addEventListener('click', () => {
    fetch('CvNico.pdf')                    //Esto ya devuelve una promesa.
        .then(res => res.blob()) //Aquí tenemos la respuesta de la promesa. Es una imagen que sólo se podrá ver en el entorno local. 
        .then(pdf => {          //Como ya tenemos la rta que es "pdf"(o caca), la mostramos a traves de <a> modificando su atributo href con un nuevo link
            document.getElementById('pdf').href = URL.createObjectURL(pdf) //lo creamos con URL.createObjetURL() 
        })
    })
