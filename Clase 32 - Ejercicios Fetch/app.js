const obtenerImagen1 = ()=>{
    setTimeout(() => {
        const llamadaInterna = async ()=> { 
            try {
            const llamada = await fetch('http:/C:/Users/Nicolas/Documents/Nico/Estudios%20y%20Cursos/Programacion/Front%20End/Prueba%20para%20API.jpg')
            const respuesta = await llamada.blob()    
            console.log(respuesta)
            } catch (error) {
                console.error('No OK: ', error)
            }}
            return llamadaInterna()
            JSON.parse()
    }, 3000);  
}


obtenerImagen1()
