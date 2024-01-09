/**Ejercicios para esta sesion
 * 
 * Declara una funcion para cada problema planteado
 * 
 * calcular el perimetro de un circulo
 * calcular el area de un rectangulo
 * calcular el cuadrado de un numero
 * calcular la conversion de grados celsius a farenheit
 * calcular el valor del voltaje dadas la resistencia y la corriente
 * calcular el volumen de una esfera
 * 
 * CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */

const perimetroCirculo = ( diametro ) => Math.PI * diametro;
const areaRectangulo = ( base, altura ) => base * altura;
const cuadradoNumero = ( numero ) => Math.pow(numero, 2); // numero * numero;
const conversionCelsiusFarenheit = ( gradosCelsius ) => (gradosCelsius * (9/5)) + 32;
const calcularVoltaje = ( corriente, resistencia ) => corriente * resistencia;
const volumenEsfera = ( radio ) => (4 / 3) * Math.PI * Math.pow(radio, 3);