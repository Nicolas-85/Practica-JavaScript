let numbers = new Array();
let num;

function armarArray() {
    do {
        num = parseInt(prompt('Ingrese un números, cuando termine, ingrese Stop '));
        if (num !== 0) {
            numbers.push(num);
            num++;        }
    } while (num === "Stop" );

    console.log(numbers);
    return alert(numbers);
}

armarArray();
