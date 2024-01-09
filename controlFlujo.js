// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

const puedeVotar = (edadPersona) => {
    if (edadPersona >= 18) {
        console.log("Puede votar.");
    } else {
        console.log("No puede votar.");
    }
}

// let edadPersona = 18
// console.log(edadPersona >= 18 ? "Puede votar" : "No puede votar");
// Otra opción es con operador ternario


/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */

const calcularPromedioAlumno = (...calificaciones) => { // Permite n número de calificaciones.
    let sumatoriaCalificaciones = 0;
    for (let calificacion of calificaciones) {
        sumatoriaCalificaciones += calificacion;
    }
    return sumatoriaCalificaciones / calificaciones.length();
}

const resultadoAlumno = (...calificaciones) => {
    let promedioAlumno = calcularPromedioAlumno(calificaciones);
    if (promedioAlumno >= 7) {
        console.log("Alumno aprobado.");
    } else {
        console.log("Alumno Reprobado");
    }
}

/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

const divisibleEntre7y8 = (numero) => {
    if (numero % 7 === 0 && numero % 8 === 0) {
        console.log(`${numero} es divisible entre 7 y 8. Verdadero`);
    } else {
        console.log(`${numero} no es divisible entre 7 y 8. Falso.`);
    }
}

divisibleEntre7y8(56);
divisibleEntre7y8(7);
divisibleEntre7y8(8);
divisibleEntre7y8(0);
divisibleEntre7y8(224);
divisibleEntre7y8(73);

/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

const divisibleEntre4o9 = (numero) => {
    if (numero % 4 === 0 || numero % 9 === 0) {
        console.log(`${numero} es divisible entre 7 y 8. Verdadero`);
    } else {
        console.log(`${numero} no es divisible entre 7 y 8. Falso.`);
    }
}

/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */

const calculadoraSimple = (operacion, num1, num2) => {
    switch (operacion) {
        case 1:
            console.log(num1 + num2);
            break;
        case 2:
            console.log(num1 - num2);
            break;
        case 3:
            console.log(num1 * num2);
            break;
        case 4:
            (num2 !== 0)
                ? console.log(num1 / num2)
                : console.log("Indeterminación.");
            break;
        default:
            console.log("Operación no válida.");
            break;
    }
}

/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

const recomendacionPelicula = (categoria) => {
    switch (categoria) {
        case 'accion':
            console.log("Peli de acción");
            break;
        case 'drama':
            console.log("Peli de drama.");
            break;
        case 'comedia':
            console.log("Peli de comedia.");
            break;
        case 'romance':
            console.log("Peli de romance.");
            break;
        case 'suspenso':
            console.log("Peli de suspenso.");
            break;
        case 'terror':
            console.log("Peli de terror.");
            break;
        default:
            console.log("No se encuentra la categoria.");
            break;
    }
}


/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */

const opcionesCajeroATM = (opcion) => {
    if (opcion === 1)
        console.log("Retirar dinero");
    else if (opcion === 2)
        console.log("Transferencia");
    else if (opcion === 3)
        console.log("Deposito");
    else if (opcion === 4)
        console.log("Pago de servicios");
    else
        console.log("Operación no válida.");
}


/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */

// Se hace petición a API fixer para obtener divisas en tiempo real.
// Al ser gratuito, se limita a 1k de peticiones y el euro como base de búsqueda.
const divisasAPI = async () => {
    const respuesta = await fetch('http://data.fixer.io/api/latest?access_key=a87787028078c206114c2f379513742d&format=1');
    const datos = await respuesta.json();
    return datos;
}

// Es una función asincrona porque recibe una promesa de a función divisaAPI.
// Otra opción sería hacer uso de .then
const conversorDivisas = async (cantidadPesosMexicanos, opcionDivisa) => {
    const datosDivisas = await divisasAPI();
    let divisaEscogida = '';
    let valorDivisa, valorPesoMexicano, resultado;
    switch (opcionDivisa) {
        case 1:
            divisaEscogida = 'USD';
            break;
        case 2:
            divisaEscogida = 'EUR';
            break;
        case 3:
            divisaEscogida = 'JPY';
            break;
        case 4:
            divisaEscogida = 'GBP';
            break;
        case 5:
            divisaEscogida = 'CHF';
            break;
        default:
            break;
    }

    if (!divisaEscogida) {
        console.log("No se encuentra la opción solicitada.");
        return;
    }
    valorDivisa = datosDivisas.rates[divisaEscogida]; // Valor en euros
    valorPesoMexicano = datosDivisas.rates['MXN']; // Valor en euros
    resultado = cantidadPesosMexicanos * (valorDivisa / valorPesoMexicano);
    console.log(`${cantidadPesosMexicanos}MXN equivale a ${resultado.toFixed(3)}${divisaEscogida}`);
}

conversorDivisas(100,5);

/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */

const descuentoProducto = ( precio, codigo ) => {
    const CLAVE = "DESCUENTO10";
    if ( codigo === CLAVE ) {
        return precio - (precio * .10);
    } else {
        return precio;
    }
}
