// let num = 7;
// switch (num) {
//     case 1: console.log('Num tiene el valor 1');
//         break;
//     case 2: console.log('Num tiene el valor 2');
//         break;
//     default: console.log('Num no vale ni 1 ni 2')
//         break;
// }

// switch (num) {
//     case 1:
//     case 3:
//     case 5:
//         console.log(`${num} es impar`);
//         break;
//     case 2:
//     case 4:
//         console.log(`${num} es par`)
//     default:
//         console.log(`${num} no es un número menor que 6`);
//         break;
// }

//------ 8 OPERADOR TERNARIO---------------
// let num = 2;

// // (num % 2 === 0)? console.log(`${num} es par`) : console.log(`${num} es impar`);
// (num % 2 == 0)? 
//     (
//     (console.log(`${num} es par`)), (console.log(`${num} es par 2`)) //cuando son varias sentencias se encierran entre paréntesis.
//     ) :
//     console.log(`${num} es impar`);

// 10 Arrays II: propiedades y métodos.
// let num = [1, 2, 3, 4, 5, 6];
// console.log(num.indexOf(3));

// let palabras = ["concha", "pito", "culo", 'teta'];
// console.log(palabras.indexOf('pito'));
// console.log(palabras.join(' / '));

//--------13 For of / For in----------------------
// let nombres = ['Pedro', 'Julia', 'Jesi', 'Nico'];

// for (const nombre of nombres) {
//     console.log(nombre);
// }

// for (const nombre in nombres) {
//     console.log(nombre); 
//     }

//Ejercicio 1:
// Solicita un nombre, la edad y muestra por consola el mensaje "Hola______, tienes ______ años y el año que viene trndrás ____ años".
// Realiza el ejercicio con prompt(mensaje) y has uso de los templates strings.

// const nombre = prompt('Ingrese su nombre');
// const edad = parseInt(prompt('Ingrese su edad'));
// console.log(`Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${edad + 1} años`);

/*Ejercicio 2:
    Escribe un programa que pueda calcular el area de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué
    figura se quiere calcular el área, despúes solicita los datos que necesites para calcularlo.
    Triángulo = b*h/2
    Rectángulo = b*h
    Círculo = pi * r2 (pi * radio al cuadrado)*/

// const figura = prompt('Ingrese la figura geométrica que quiera calcular su área.');

// if (figura.toLocaleLowerCase() === 'triángulo') {
//     base = parseInt(prompt('Ingrese la base'));
//     altura = parseInt(prompt('Ingrese la altura'));
//     alert('El área de su triángulo es ' + ((base * altura) / 2));
// } else if (figura.toLocaleLowerCase() === 'rectángulo') {
//     base = parseInt(prompt('Ingrese la base'));
//     altura = parseInt(prompt('Ingrese la altura'));
//     alert('El área de su triángulo es ' + (base * altura));
// } else if (figura.toLowerCase() === 'círculo') {
//     radio = parseInt(prompt('Ingrese el radio del círculo'));
//     alert('El área de su triángulo es ' + (Math.PI * Math.pow(radio, 2)));
// } 



/*Ejercicio 3:
    Solicita un número e imprime todos los npumeros pares e impares desde 1 hasta ese núero con el mensaje "es par" "es impar" */

// const tope = parseInt(prompt('Ingrese un número'));
// for (let i = 0; i <= tope; i++) {
//     const element = i;
//     if (element % 2 === 0) {
//         console.log(`${element} es par`);
//     } else {
//         console.log(`${element} es impar`);    
//     }
// }

/* Ejercicio 4:
    Escribe un programa que pida un número entero mayor que 1 y que escriba si el número es primo o no.
        un número primo es aquel que sólo es divisible por si mismo o la unidad. */
// function numeroPrimo() {
    // let numero = parseInt(prompt('Ingrese un número para calcular si es primo.'));
    // let divisores = 0;
    // if (numero === 1) {
    //   console.log('El número no es válido');  
    // } else {
    //     for (let i = 2; i < numero; i++) {
    //         if (numero % i === 0) {
    //             console.log(`${numero} / ${i} = ${numero/i} No es primo`);
    //             divisores++
    //             break;
    //         }   
    //     }
    //     if (divisores == 0) {console.log(`${numero} es primo`)}; -----Esta parte no la entiendo
    // }

// /*Ejercicio 5:
// 	Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
// 	El factorial es el resultado de multiplicar ese número por sus nateriores hasta la unidad
// 		!5 = 5*4*3*2*1 = 120*/

    // const numero = parseInt(prompt('Ingrese un número para calcular su factorial'));
    // // console.log(numero);
    // let resultado = 1;
    // for (let i = numero; i > 0; i--) {
    //     console.log(i); 
    //     resultado *= i;
    // }
    // console.log(`El factorial de ${numero} es ${resultado}`);

/*Ejercicio 6:
    Escribe un programa que permita ir introduciendo una serie indeterminada de úmeros mientras su suma no supere 50.
    Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido.
 */

// numeros = parseInt(prompt('Ingrese números'));

// for (let i = 0; i < ; i++) {
//     const element = array[i];
    
// }
//-------------------------------------------------terminar-----------------------------------------------------

/*Ejercicio 7:
    Crea 3 arrays. El primero tendrá 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos.
    Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, 
    si el resultado es par guarda ese resultado en pares, sino en impares. Muestra por consola:
        -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
        -el array de pares e impares */

/*Ejercicio 8
    Dado un array de letras, solicita un número de DNI y calcua que letra le corresponde.
    El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido
    entre 23 */
    
    // const letras = [ "t", "r", 'w', 'a', 'g', 'm', 'y', 'f', 'p', 'd', 'x', 'b', 'n', 'j', 'z', 's', 'q', 'v', 'h', 'l', 'c', 'k', 'e', 't'];

//Ejercicio 9:
    // Solicitar al usuario una palabra y mostrar por consola el número de consonantes vocales y longitud de palabra.

//Ejercicio 10:
    //Dado un array que contiene ['azul', 'amarillo', 'rojo', 'verde', 'rosa'], determinar su un color inroducido por el usuario a través de
    //prompt se encuentra dentro del array.



//-------------17: Introducción a OBJETOS-------------------------------
// const persona = {
//     nombre: 'Pedro',
//     edad: 3,
//     padres: ['Jesi', 'Nico', 'Julia', 'Morena']
// }
// console.log(persona.nombre);
// console.log(persona['nombre']);
// for (const key in persona) {
//     console.log(key);
// }

// for (const key in persona) {
//     console.log(persona[key]);
// }

// for(const padre of persona.padres){
//     console.log(padre)
// }
// console.log(`Hola, soy ${persona.nombre}, tengo ${persona.edad} años y mi familia se compone de ${persona.padres.join(', ')}`)

//---------------------------------18 Funciones-------------------------------
// function saludar() {
//     console.log('Hola Mundo');
// }
// saludar();

// const saludar = () => console.log('Hola Mundo')
// saludar();
// const saludarUsuario = (usuario) => {console.log(`Hola ${usuario}`)}
// saludarUsuario('Nicolas');

// const suma = (num1, num2) => {
//     if (num1 == 2) {
//         return num1 + num2    
//     }
//     return num1 // Esto no se ejecuta porque al num1 le dimos parametro 2 entonces entra en el IF. cuando una función encuentra
// }               // un return, corta el cíclo.    
// console.log(suma(2, 3));

// const suma = (num1, num2) => num1 + num2
// let resultado = suma(2, 3)
// console.log(resultado);

//----------------------------------19 POO - Instanciad una clase.-------------------------------
// class Persona {
//     constructor(nombre, apellido, edad) {
//         this.nombre = nombre
//         this.apellido = apellido
//         this.edad = edad
//         this.datos = `Nombre y Apellido: ${this.nombre} ${this.apellido}. Edad: ${this.edad} años` //Esto es una propiedad nueva con su valor.
//                                             //aquí no hace falta el this. porque estamos dentro del constructor.
//     }
//     saludar() {
//         return `Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`
//                                     //Aquí si se coloca el this. ya que 
//     }
// }

// const pedrito = new Persona('Pedro', 'Alvarez', 3)
// const julia = new Persona('Julia', 'Alvarez', 1);
// console.log(pedrito) //---------Muestro por consola nuestro objeto pedrito
// console.log(julia.saludar()) //----Muestro por consola el método "saludar"

// ------------------------20 Clases y Objetos: Práctica-----------------------------------------
/*Crea una clase Libro. La clase Libro tendrá título, autor, año y género.
Crea un método que devuelva toda la información de libro.
Pide 3 libros y guardalos en un array
Los libros se introduciran al arrancar el programa pidiendo los datos con prompt()
Validar que los campos no se introduzcan vacíos
Validar que el año sea un número y que tenga 4 dígitos
Validar que el género sea: aventuras, terror o fantasía.
Crea una función que uestre todos los libros
Crea una función que muestr los autores ordenados alfabéticamente
Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando el método que devuelve 
información */

// class Libro {
//     constructor(titulo, autor, año, genero) {
//         this.titulo = titulo
//         this.autor = autor
//         this.año = año
//         this.genero = genero
//     }
//     informacionLibro(){
//         return `El libro ${this.titulo} encasillado en el género: ${this.genero}, fue escrito por ${this.autor} y lanzado en el año ${this.año}`
//     }
//     obtenerPorGenero() {
//        return this.genero
//     }
// }

// let tresLibros = []
// while (tresLibros.length < 3) {
//     let titulo = prompt('Ingrese el título del libro')
//     let autor = prompt('Ingrese el autor del libro')
//     let año = prompt('Ingrese el año de publicación del libro')
//     let genero = prompt('Ingrese el género del libro').toLocaleLowerCase()
//     if (titulo != '' && 
//         autor != '' && 
//         !isNaN(año) &&
//         año.length == 4 &&
//         (genero == 'aventura' || genero == 'terror' || genero == 'fantasía')) {
           
//             tresLibros.push(new Libro(titulo, autor, año, genero))
//     }
// }
// const mostrarLibros = () => {
//     console.log(tresLibros)
// }
// mostrarLibros()

// const mostrarAutores = ()=>{
//     for (const i of tresLibros) {
//         console.log(i.autor)
//     }
// }
// mostrarAutores()

// const filtrarGenero = () => {
//     const genero = prompt('Ingrese un género').toLowerCase()
//     for (const libro of tresLibros) {
//         if (libro.obtenerPorGenero() == genero) {
//             console.log(Libro.informacionLibro())
//         }
//     }
    
// }
// filtrarGenero()----------------------Terminar-----------------------------------

//-------------------21 Arrays: Métodos, segunda parte.---------------------------
//-----.from 
// let palabra = 'Hola Mundo!'
// console.log(Array.from(palabra))
// console.log(palabra.split(''))

//----.sort--------
// const letters = ['c', 'x', 'u', 'l']
// const numbers = [3, 2, 10, 33, 5, 6]

// console.log(letters.sort())
// console.log(numbers.sort())// no lo ordena como queremos porque con el unicode
//                             // sólo toma la primer cífa.
// console.log(numbers.sort((a, b) => a-b))// comparación para ordenar numericamente

//---.forEach()-------
/*const numbers = [12, 15, 47, 88, 99]
numbers.forEach((number, index) => {
    console.log(`El número ${number} está en la posición ${index}`)
})*/
    
//----.map()------
// const numbers = [3, 2, 10, 33, 5, 6]
// const numbers2 = numbers.map(duplicar => duplicar * 2)
// console.log(numbers2.sort((a, b) => a-b))

//-----.reduce()---------------
// const numbers = [1, 2, 3, 4, 5, 6]
// console.log(numbers.reduce((a, b) => a+b))

//-------Spread Operator (operador de expansión)----------
// const numeros = [1, 2, 3]
// const sumarElementos = (a, b, c) => {
//     return a + b + c
// }
// console.log(sumarElementos(...numeros)); // numeros es un array y si lo pasamos como tal en los parámetros, 
                                        // lo toma como un sólo elemento y no suma, sino que da undefined
                                        //si le coloamos el spread operator... lo expande y toma sus números, permitiendo hacer la suma.
// const personas = ['Pedro', 'Julia', 'Jesi', 'Nico']
// const nuevasPersonas = ['Eva', 'Mariana', 'Martín']
// personas.push(...nuevasPersonas) // meter un array dentro de otro a través del spread operator
// console.log(personas)

// //copiar arrays--------
// const array1 = [1, 2, 3, 4]
// const array2 = [...array1]
// console.log(array1)

// //concatenar dos arrays
// const array3 = [5, 6, 7]
// const arrayConcat = [...array1, ...array3]
// console.log(arrayConcat)

//Enviar un numero indefinido de argumentos a una función
//(parámetros REST)
// const parametrosRest = (...numeros) => {
//     console.log(numeros)
// }
// parametrosRest(1, 2, 3, 4, 5) //Le podemos poner los argumentos que querramos porque le dimos
//spread operator como parámetros, o sea un arreglo indef de parámetros

// //librería Math
// const numeros = [-12, 2, 3, 23, 43, 2, 3]
// console.log(Math.max(...numeros)) // max no puede calcular el máximo de los elementos de un array
// console.log(Math.min(...numeros))
//pero si lo hacemos con el spread operator, si.

//Eliminar objetos duplicados de un arreglo
// const numeros = [-12, 2, 3, 23, 43, 2, 3]
// console.log(new Set(numeros)) // Esto devuelve un objeto Set, con los números sin repetir.
// //pero si lo queremos en un array.
// console.log([...new Set(numeros)]) //lo ponemos entre corchetes y le aplicamos spread Operator.