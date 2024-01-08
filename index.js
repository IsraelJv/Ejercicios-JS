
// Ejercicio 1

const PI_VALUE = Math.PI;
const MAX_ELEMENTS = 10;
const NAME_DATABASE = "Database-name";
const PORT_DATABASE = "3001";
const USER_DATABASE = "User 1";
const PASSWORD_DATABASE = "password123";
let fruitName = "Manzana";
let randomNumber = Math.random() * 100;
let isDatabaseConnected = False;
let productPrice = 10.5;
let isValid = True;

console.log(PI_VALUE);
console.log(MAX_ELEMENTS);
console.log(NAME_DATABASE);
console.log(PORT_DATABASE);
console.log(USER_DATABASE);
console.log(PASSWORD_DATABASE);
console.log(fruitName);
console.log(randomNumber);
console.log(isDatabaseConnected);
console.log(productPrice);
console.log(isValid);

// Ejercicio 2

let num1 = 10;
let num2 = 2;

const sumaNumeros = num1 + num2;
console.log(sumaNumeros);
const restaNumeros = num1 - num2;
console.log(restaNumeros);
const multiplicacionNumeros = num1 * num2;
console.log(multiplicacionNumeros);
try {
    const divisonNumeros = num1 / num2;
    console.log(divisonNumeros);
} catch (error) {
    console.warn(`Se ha producido un error: ${error} `);
}

// Ejercicio 3

let nombre = "Juan";
let segundoNombre = "Fabián";
let apellidoMaterno = "López";
let apellidoPaterno = "Martínez";
let edad = 50;

console.log(`${nombre} ${segundoNombre} ${apellidoMaterno} ${apellidoPaterno}, tiene ${edad} años. `);

// Ejercicio 4

let edadEntero = 20;
let edadString = String (edadEntero);
let numProductosExistencia = '10';
let numProductosExistenciaNumber = Number (numProductosExistencia);
let tieneValor = Boolean (edadEntero);
let ceroSiEsCierto = Number (tieneValor);

console.log(edadEntero, typeof(edadEntero));
console.log(edadString, typeof(edadString));
console.log(numProductosExistencia, typeof(numProductosExistencia));
console.log(numProductosExistenciaNumber, typeof(numProductosExistenciaNumber));
console.log(tieneValor, typeof(tieneValor));
console.log(ceroSiEsCierto, typeof(ceroSiEsCierto));
