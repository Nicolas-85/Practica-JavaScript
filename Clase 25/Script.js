//esto es un objeto
let yo = {nombre: 'Nicolás' , apellido: 'Alvarez' , edad: 31}; 
console.log(yo); 

//así se agrega valor a una propiedad
yo.email = 'nicolasmartin_85@hotmail.com';
console.log(yo);

//así se muestra el valor de una propiedad que conocemos
console.log(yo.nombre);

// así se crea una clase
class personas {   
};

//instanciar un objeto  a partir de una clase (no lo entiendo muy bien.)
yo = new personas;

//definimos métodos de un objeto
 let me = {
     nombre: "Nicolás",
     apellido: "Alvarez",
     fullname: function(){
        return this.nombre + ' ' + this.apellido;
     }
     
}
 

