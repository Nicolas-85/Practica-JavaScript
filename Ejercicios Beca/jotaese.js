
/**var num1 = parseInt (prompt ('ingrese un numero'));
var num2 = parseInt (prompt ('ingrese un numero'));
var suma = num1 + num2;
alert ("la suma de sus numeros es " + suma);

/**var num1 = parseInt (prompt ("ingrese un numero"));
var num2 = parseInt (prompt ("ingrese un numero"));
var num3 = parseInt (prompt ("ingrese un numero"));
var num4 = parseInt (prompt ("ingrese un numero"));
var num5 = parseInt (prompt ("ingrese un numero"));
var promedio = num1 + num2 + num3 + num4 + num5 / 5;
alert ("el promedio de los valores ingresados es " + promedio);**/

/*Ejercicio 1

/**var num1 = parseInt (prompt ('ingrese un numero'));
if ( num1 % 2 == 0) {
    alert("el numero es par");
} else {
    alert ("el numero es impar");
}**/

/* Ejercicio 2
/*var num1 = parseInt (prompt ('Ingrese su edad'));
var name1 = prompt ("Se encuentra estudiando?");

if (num1 !== 0 && name1 === "si" || name1 === "no") {
    alert("Edad " + num1 + ". Se encuentra estudiando?. " + name1);
} else {
    alert("No cumple las condiciones");
}*/

/*Ejercicio 3
var num1 = parseInt (prompt ('Ingrese su edad'));

if (num1 >= 18) {
    alert ("Estas autorizado para votar");
} else {
    alert ("No estas autorizado a votar");
}*/

/*Clase 21 - ej 1
var sum = 0;
for (var i=0; i<5; i++) {
    var a = parseInt (prompt("Ingrese número"));
    sum += a;
}

alert("la suma es " + sum);*/

/*Ej 2
var sum = 0;
var i;
for (i=0; i<5; i++) {
    var a = parseInt (prompt("Ingrese número"));
    sum += a;
}

var prom = sum / i;
alert("el promedio es " + prom);*/

/*Ejercicio 3
var edad;
var sumaEdad = 0;
while (edad != 0) {
    edad = parseInt(prompt("Ingrese su edad ")); 
    if (edad >= 18) {
    sumaEdad += 1;
}
}
console.log("los mayores son: " + sumaEdad);*/

/*Ejercicio 4*/

/*Clase 24 - ej 3*/

/*var num = 0;
let arnum = [];
while (num !== 0) {
    num = parseInt(prompt("Ingrese un numero: "));
    arnum.push(num);
}

Ejercicio incompleto------*/

/*Clase 25, ejercicio 1

let user = {nombre: "" , apellido:"", email:""};

let nom = prompt("Ingrese su nombre: ");
let ap = prompt("Ingrese apellido: ");
let em = prompt("Ingrese su correo: ");

user.nombre = nom;
user.apellido = ap;
user.email = em;

alert (user.nombre + " - " + user.apellido + " - " + user.email );

Ejercicio 2:*/

/*class user {
    
}

let persona = new user( )  */

/* Clase 28-----
/* 
let promesa = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("ok");
    }, 2000);
});
​
promesa.then(function(response){
    console.log(response);
});
*/​
/*
let promesa = new Promise(function(resolve, reject){
    setTimeout(() => {
        reject("error");
    }, 1000);
});
​
promesa.catch(function(error){
    console.log(error);
});
 */
​/*
let numero = parseInt(Math.random()*100);
​
function busqueda(numero){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (numero % 2 === 0){
                resolve(numero +" "+ 'par');
            }else{
                reject(numero +" "+ 'impar');
            }
        }, 2000);
    });
}
​
busqueda(numero)
    .then(function(resultado){
        console.log('resultado', resultado);
    })
    .catch(function(error){
        console.log('resultado', error);
    });
*/

/*let promesa1 = new Promise(function(resolve, reject){
    const random = parseInt(Math.random()*3);
    console.log('promesa1 ',random);
    setTimeout(() => {
        resolve("la 1");
    }, random);
});
​
let promesa2 = new Promise(function(resolve, reject){
    const random = parseInt(Math.random()*3);
    console.log('promesa2 ',random);
    setTimeout(() => {
        resolve("la 2");
    }, random);
});
​
Promise.race([promesa1, promesa2]).then(function(response){
    console.log(response);
}).catch(function(error){
    console.log(error);
});*/

/*Ejercicio 1: Clase 29*/

/*const url = 'https://jsonplaceholder.typicode.com/users';
function llamadaApi (url){
    return fetch(url).then(response => response.json())
    .then(datos =>{
        
        for(let i = 0; i < datos.length; i++){
            console.log(datos[i].name);
        }
    }).catch(err=>{
        console.error("Error", err);
    });
}
llamadaApi(url)*/

/*Práctica 05/04 - Con Gonza*/

/*Clase 33 actividad previa al brake*/

//Practica clase 33
// Name and Password from the register-form
/*var name = document.getElementById('name');
var pw = document.getElementById('pw');

// storing input from register-form
function store() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('pw', pw.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if(userName.value !== storedName || userPw.value !== storedPw) {
        alert('ERROR');
    }else {
        alert('You are loged in.');
    }
}*/

var num1 = parseInt(prompt ('Ingrese un número'));

var num1 = parseInt(prompt('Ingrese otro número'));



