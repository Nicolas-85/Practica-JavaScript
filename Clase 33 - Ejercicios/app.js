    const nicolas = {
        nombre: prompt('Ingrese sunombre: '),
        apellido: prompt('Ingrese su apellido: '),
        nacimiento: prompt('Ingrese su fecha de nacimiento: ')
    }
    nicolas['Fecha De Nacimiento'] = prompt('Otra Fecha de Nacimiento: ')
    const aJson = JSON.stringify(nicolas)
    console.log(nicolas)
    // console.log(aJson)
