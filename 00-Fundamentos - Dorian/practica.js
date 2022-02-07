// console.log("Hola Mundo")
// console.log((3+4).toString())
// alert("Su nombre es " + prompt("Ingrese su nombre"));

// Ejercicios Clase 18.
// Ejercicio 1
// const numero1 = parseInt(prompt("Ingrese un número")) 
// const numero2 = parseInt(prompt("Ingrese otro número"))
// alert("El resultado de la suma es " + (numero1 + numero2)) 

// Ejercicio 2
// const numero1 = parseInt(prompt("Ingrese un número"))
// const numero2 = parseInt(prompt("Ingrese un número"))
// const numero3 = parseInt(prompt("Ingrese un número"))
// const numero4 = parseInt(prompt("Ingrese un número"))
// const numero5 = parseInt(prompt("Ingrese un número"))

// var promedio = alert("El promedio de los numeros ingresados es: " + (numero1+numero2+numero3+numero4+numero5)/5)

// Ejercicio 3: Perdir al usuario que ingrese el diámetro de un círculo y con eso calcular el perímetro del mismo.
// diametro = parseInt(prompt("Ingrese el díametro de un círculo:"))
// alert("El perímetro su círculo es: " + Math.PI*diametro)

//Ejercicio 5/6:
// const nombre = prompt("Ingrese su nombre: ")
// const apellido = prompt("Ingrese su apellido: ")
// const edad = prompt("Ingrese su edad")
// alert("Google Drive" + 
//         nombre.toUpperCase() +
//         apellido.toLocaleLowerCase() +
//         edad) // No puedo hacer el salto de línea para mostrarlo por alert"

// Clase 20 - Ejercicio 1:
// var numeroPar = parseInt(prompt("Ingrese un número"))
// if (numeroPar %2 == 0) { 
//         alert('el número es par')
// } else {
//         alert('el número es impar')
// }

        // Ejercicio 2:
// const edad = prompt("Ingrese su edad: ")
// const estudio = prompt("Se encuantra cursando estudios?: ")
// if (estudio === "si") {
//         alert("Usted tiene: " + edad + " años y se encuentra cursando estudios")
// } else {
//         alert("Usted tine: " + edad + " años y no se encuentra cursando estudios")
// }

        //Ejercicio 3:
// var edad = prompt("Ingrese su edad: ")
// if (edad >= 18) {
//         alert("Usted está habilitado para votar")
// } else {
//         alert("Usted no se encuentra habilidato para votar")
// }

        //Ejercicio 4:
// let usuario = "NicolasMartín"
// let contraseña = "nicolas85"
// let comprobarUsuario = prompt("Ingrese su usuario: ")
// let comprobarContraseña = prompt("Ingrese su contraseña")
// if (usuario != comprobarUsuario) {
//         alert("Su usuario es incorrecto")
// } else {
//         if (contraseña != comprobarContraseña) {
//                 alert("Su contraseña es incorrecta")
//         } else {
//                 alert("Acceso concedido")
//         }
// }

// Clase 21 - Ejercicio 1:
        
// const numero1 = parseInt(prompt("Ingrese un número: "))
// const numero2 = parseInt(prompt("Ingrese un número: "))
// const numero3 = parseInt(prompt("Ingrese un número: "))
// const numero4 = parseInt(prompt("Ingrese un número: "))
// const numero5 = parseInt(prompt("Ingrese un número: "))
// resultado = numero1+numero2+numero3+numero4+numero5
// alert(resultado)

//         // Ejercicio 2:
// promedio = resultado/5
// // resultadoPromedio = `${resultado}${promedio}`
// alert(resultado +" "+ promedio)

        // Ejercicio 3:
// let edades;
// let edadesGuardadas = [];
//         while (edades != 0 && edades > 17) {
//                edades = parseInt(prompt("Ingrese su edad: "))
//                edadesGuardadas += edades
//                console.log("entra en el array")

//         }
// console.log(edadesGuardadas);

//----------Clase 23 Funciones--------------
//----------Ejercicio 1
// const usuario = prompt('Ingrese su usuario');
// const contraseña = parseInt(prompt('Ingrese su contraseña'));
// function validación() {
//     if (usuario === "Nicolas" && contraseña === 1234) {
//         alert('Credenciales validas');
//     } else {
//         alert('Usuario o contraseña inválidos!');
//     }
// }
// validación();
//----------Ejerciio 2
// const pi = Math.PI;
// console.log(pi);
// const calcularDiametro = () => {
//     perimetro = parseInt(prompt('Ingrese el diámetro de un círculo'));
//     return alert(perimetro / pi);
    
// }
// calcularDiametro();

//////////////////////////////////////Ejercicios AventJS 01 contar ovejas./////////////////////////////
// const ovejas = [
//     { name: 'Noa', color: 'azul' },
//     { name: 'Euge', color: 'rojo' },
//     { name: 'Navidad', color: 'rojo' },
//     { name: 'Ki Na Ma', color: 'rojo'},
//     { name: 'AAAAAaaaaa', color: 'rojo' },
//     { name: 'Nnnnnnnn', color: 'rojo'}
//   ];
// console.log(ovejas);

// const ovejasFiltradas = ovejas.filter(producto => `${producto.name}`.toLowerCase().includes('a') && producto.color === 'azul') 
// console.log(ovejasFiltradas);
// console.log(ovejasFiltradas);

// let ovejasFiltradas2 = ovejas.filter(producto => producto.name.toLocaleLowerCase().includes('a' && 'n'));
// console.log(ovejasFiltradas2);

// let contarOvejas = ovejas.filter(producto => producto.color === 'rojo');
// console.log(contarOvejas);

// let contarOvejas2 = ovejas.filter((producto) => {producto.nombre === includes("a")});
// console.log(contarOvejas2);

//-------Clase 24 Arrays: ejercicio 1-----------------
//Ingresar meduante prompt números indefinidamente hasta que el usuario ingrese "Stop".
//Almacenar todos los datos en un array y mostrarlo al final .
// let primerArray = [];
// let numeros;
// console.log(numeros);

// function crearArray() {
//     do {
//         numeros = prompt("Ingrese un número");
//     } while (numeros !== "Stop") {
//         primerArray.push(numeros);   
//     }
//     console.log(primerArray);
// }
// Hacer: solicitar número mediante prompt
// Mientras: número sea distinto de "Stop", seguir solicitando números y guardarlos en un arreglo.
// Mostrar arreglo al final.

// let numeros = [];
// function aVerr() {
//     let num = prompt('ingrese un número');  
//     numeros.push(num);  
//      do {
//         num = prompt('ingrese otro número, cuando finalice escriba stop');
//         numeros.push(num);
//         // numeros.pop();
//     } while (num !== 'stop')
//     numeros.pop();
// }
// aVerr();
// console.log(numeros);

//----------------Ejercicio 2----------------------
//Ingresar mediante prompt números hasta el ingreso de un 0. Crear un array para los números pares, otro para los impares y un tercero
// para almacenar datos no numéricos. Mostrar los resultados al finalizar el ciclo. El valor 0 no incluirlo en ningún array.
let arreglo2 = [];
let pares = [];
let impares = [];
let otroDato = [];
let numeros;
function ejercicio2() {
    numeros = prompt('Ingrese números');
    arreglo2.push(numeros);
    do {
        numeros = prompt('Ingrese más números. Colocando 0 se corta')
        arreglo2.push(numeros);
        } while (numeros !== "0");
    
    arreglo2.forEach(element => {
        if (isNaN(element)) {
            otroDato.push(element);
        } else if (element % 2 === 0 && Number(element)) {
            pares.push(element);
        } else {
            impares.push(element)
            // impares.pop();
        }
    });
    impares.pop();
    // console.log(arreglo2);
    console.log(otroDato);
    console.log(pares);
    console.log(impares);
}
ejercicio2(); 

//-----------------------Ejercicio 3--------------------------------
//Ingresar mediante propmpt números hasta el ingreso de un 0. Almacenar la información en un array. Eliminar del array el número más alto
//y el más bajo. Si el más alto o bajo se repiten, sólo eliminarlos una vez.