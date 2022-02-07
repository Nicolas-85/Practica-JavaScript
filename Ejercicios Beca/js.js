//Clase 19. Ejercicio 1

/*
var num1 = parseInt(prompt('Ingrese un número'));
var num2 = parseInt(prompt('Ingrese otro número'));
var suma = num1 + num2;
alert(suma);
*/

//Ejercicio 2

/*
var num1 = parseInt(prompt('Ingrese un número'));
var num2 = parseInt(prompt('Ingrese un número'));
var num3 = parseInt(prompt('Ingrese un número'));
var num4 = parseInt(prompt('Ingrese un número'));
var num5 = parseInt(prompt('Ingrese un número'));
var promedio = (num1 + num2 + num3 + num4 + num5) /5;
alert(promedio);
*/

//Ejercicio 3

/*
var diametro = parseInt(prompt('Ingrese el diámetro de un círculo'));
var perimetro = diametro * Math.PI;
alert(perimetro);
*/

//Ejercicio 4

/*
var diametro = parseInt(prompt('Ingrese el diámetro de un círculo'));
var area = (1/4) * Math.PI * Math.pow(diametro, 2);
alert(area);
*/

//Ejercicio 5, 6 y 7

/*
nombre = prompt('Ingrese su nombre: ').toLocaleLowerCase();
apellido = prompt('Ingrese su apellido: ').toLocaleUpperCase();
alert(nombre + " " + apellido);
*/

//Ejercicio 8 

/*
nombre = prompt('Ingrese su nombre: ');
apellido = prompt('Ingrese su apellido: ');
edad = parseInt(prompt('Ingrese su edad: '));

alert('Su nombre es: ' + nombre  + 'Su apellido es: ' + apellido + 'Su edad es: ' + edad);
*/

//Clase 20 -
//Ejercicio 1

/*var num1 = parseInt(prompt('Ingrese un número: '));
if (num1 % 2 == 0) {
    alert ('El número es par');
} else {
    alert ('El número es impar');
}
*/

//Ejercicio 2

/*edad = parseInt(prompt('Ingrese su edad: '));
estudio = prompt('Se encuentra cursando estudios?: ');

if (edad >= 18 && estudio === 'si') {
    alert ('Está autorizado');
} else {
    alert ('No está autorizado');
}*/

//Ejercicio 3

/*edad = parseInt(prompt('Ingrese su edad: '));

if (edad >= 18) {
    alert ('Puede votar');
} else {
    alert ('No está autorizado');
}
*/

//Ejercicio 4

/*contraseña1 = 1234;
contraseña2 = parseInt(prompt('Ingrese su contraseña: '));

if (contraseña1 === contraseña2){
    alert ('Acceso concedido')
} else {
    alert ('Acceso denegado')
}
*/

//Ejercicio 5

/*num1 = parseInt(prompt('Ingrese un número'));
num2 = parseInt(prompt('Ingrese otro número'));

alert ('El resultado de su division es: ' + num1 / num2);
*/

//Ejercicio 6

/*name = prompt('Ingrese su nombre y apellido');
alert (name);
*/

//Clase 21. Ejercicio 1

/*var suma = 0;
for (var i=0; i<=4; i++) {
    var numeros = parseInt(prompt('Ingrese un número: '));
    suma += numeros;
}

alert('La suma es: ' + suma);

//Ejercicio 2

alert('El promedio es: ' + suma/5);*/

//Ejercio 3
/*var edad;
var sumaEdades = 0;

while(edad != 0){
    edad = parseInt(prompt('Ingrese su edad: '));
        if(edad >= 18){
           sumaEdades += 1;
        }
}
alert('Los mayores de edad son: ' + sumaEdades);*/

//Ejercicio 4
/*numero =0;
while(numero !== "salir"){
    numero = parseInt(prompt(Ingrese un número: ));
        if(numero < 10){
            unaCifra =+ 
        }
}*/

//CLase 23. Ejercicio 1

/*const usuario = 'nico';
const contraseña = 555;
function validarUsuario(usuario, contraseña){
    usuario = prompt('Ingrese su usuario: ');
    contraseña = parseInt(prompt('Ingrese su contraseña: '));
    if(usuario === 'nico' & contraseña === 555){
         alert('Acceso concedido');
    }else{
            alert('Usuario o contraseña incorrecto');
        }
    }
validarUsuario();*/

//Clase 24. Ejercicio 1

/*let arreglo = new array();
let numero;

function resultado() {
    while(numero !== "stop"){
        numero = parseInt(prompt("Ingrese un número y si no, escriba stop"));
        
    }  
        arreglo.push(numero);
}
console.log(arreglo);
resultado();
*/

/*let numbers = new Array();
let num;
function saveArray() {
    while (num !== "Stop"){
        num = prompt("Ingrese número: ");
        if (parseInt(num)) {
            numbers.push(parseInt(num));
        }
    }
    console.log(numbers);
    return alert(numbers);
}
saveArray();*/
​         
 
let numbers = new Array();
let num;
​
function saveArray() {
    do {
        num = parseInt(prompt("Ingrese número: "));
        if (num !== 0) {
            numbers.push(num);
        }
    } while (num !== 0);
    
    console.log(numbers);
    return alert(numbers);
}
​
function findArray() {
    let numbersLen = numbers.length;
    let minIndex = 0;
    let maxIndex = 0;
    for (i=1; i<numbersLen; i++) {
        if (numbers[i] < numbers[minIndex]){
            minIndex = i;
        }
    }
    numbers.splice(minIndex,1);
​
    for (i=1; i<numbersLen; i++) {
        if (numbers[i] > numbers[maxIndex]) {
            maxIndex = i;
        }
    }
    numbers.splice(maxIndex,1);
    
    console.log(numbers);
    return alert(numbers);
}
​
saveArray();
findArray();

​
/* 
function getMax(fullArray) {
    let arrayLen = fullArray.length;
    let maxIndex = 0;
    
    for (i=0; i<arrayLen; i++) {
        if (fullArray[i] > fullArray[maxIndex] && fullArray[i] % 0){
            maxIndex = i;
        }
    }    
    console.log(fullArray);
    return alert(fullArray[maxIndex]);
}
​
let fullArray = ["2", 3, 6, "hello", "chau", "18", 24];
let fullArray2 = ["2", "6", 5, 24];
getMax(fullArray);
getMax(fullArray2);
 */
​
​
// Ejercicio hecho por franco
/*function getMax(fullArray) {
    const finalArray = [];
​
    if (!fullArray || !Array.isArray(fullArray)) {
        throw new Error('No es un array');
    }
    
    let arrayLen = fullArray.length;
​
    for (let i=0; i<arrayLen; i++) {
        const numValue = parseInt(fullArray[i]);
​
        if (!isNaN(numValue)){
            finalArray.push(numValue);
        }
    }
​
    if(!finalArray.length) {
        throw new Error('No hay valor numérico');
    }
    
    return Math.max(...finalArray);
}
​
console.log(getMax([1, 3, 5, 6, 23, 1, 75, 34]));
​
try {
    getMax('test');
}
catch (e) {
    console.error(e);
}
​
try {
    getMax();
}
catch (err) {
    console.error(err);
}
​
try {
    getMax(['a', 'b', 'c']);
}
catch (err) {
    console.error(err);
}
*/






