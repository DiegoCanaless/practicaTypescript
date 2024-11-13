"use strict";
//Tipos de Datos
//String:
const str1 = "Hola, soy una cadena con comillas dobles.";
const str2 = 'Hola, soy una cadena con comillas simples.';
const nombre = 'Juan';
const edad = 30;
const str3 = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
//Numeros:
const numEntero = 10;
const numDecimal = 10.2;
const numExponencial = 2.5e3;
const numExponencialNegativa = 1.5e-2;
const numHexadecimal = 0xA;
const numOctal = 0o12;
const numBinario = 0b1010;
//Booleans:
const bool1 = true;
const bool2 = false;
//Undefined:
let variableUndefined;
variableUndefined = undefined;
//Null:
let variableNull;
variableNull = null;
//Objeto:
const programador = {
    nombre: "Sergie Code",
    casado: false,
    cursosEnYoutube: 4,
    cursos: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT'],
    viajeAEuropa: undefined,
    viajeAEstadosUnidos: null
};
//Arrays:
const numeros = [1, 2, 3, 4, 5];
const nombres = ["Juan", "Maria", "Pedro"];
const valoresBool = [true, false, true];
//Enum:
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Lunes"] = 0] = "Lunes";
    DiasSemana[DiasSemana["Martes"] = 1] = "Martes";
    DiasSemana[DiasSemana["Miercoles"] = 2] = "Miercoles";
    DiasSemana[DiasSemana["Jueves"] = 3] = "Jueves";
    DiasSemana[DiasSemana["Viernes"] = 4] = "Viernes";
    DiasSemana[DiasSemana["Sabado"] = 5] = "Sabado";
    DiasSemana[DiasSemana["Domingo"] = 6] = "Domingo";
})(DiasSemana || (DiasSemana = {}));
var Colores;
(function (Colores) {
    Colores["Rojo"] = "Rojo";
    Colores["Verde"] = "Verde";
    Colores["Azul"] = "Azul";
})(Colores || (Colores = {}));
// Funciones
function sumar(a, b) {
    return a + b;
}
const dividir = (a, b) => a / b;
function saludar(nombre, edad) {
    if (edad !== undefined) {
        return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
    }
    else {
        return `Hola, mi nombre es ${nombre}.`;
    }
}
function saludar2(nombre, edad = 30) {
    return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
}
//Clases
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}.`);
    }
}
