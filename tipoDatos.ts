//Tipos de Datos

//String:

const str1: string ="Hola, soy una cadena con comillas dobles."

const str2: string = 'Hola, soy una cadena con comillas simples.';

const nombre : string = 'Juan';
const edad : number = 30;

const str3: string =  `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;

//Numeros:

const numEntero: number = 10;

const numDecimal: number = 10.2;

const numExponencial: number = 2.5e3;

const numExponencialNegativa: number = 1.5e-2;

const numHexadecimal: number = 0xA;

const numOctal: number = 0o12;

const numBinario: number = 0b1010;

//Booleans:

const bool1: boolean = true;

const bool2: boolean = false;

//Undefined:

let variableUndefined: undefined;

variableUndefined = undefined;

//Null:

let variableNull: null;

variableNull = null;

//Objeto:

const programador = {
    nombre: "Sergie Code",
    casado: false,
    cursosEnYoutube: 4,
    cursos: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT'],
    viajeAEuropa: undefined,
    viajeAEstadosUnidos: null
}

//Arrays:

const numeros: number[] = [1,2,3,4,5];

const nombres: string[] = ["Juan", "Maria", "Pedro"];

const valoresBool: boolean[] = [true, false, true];

//Enum:

enum DiasSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo,
}

enum Colores{
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
}

// Funciones


function sumar(a: number, b: number): number{
    return a+b;
}

const dividir = (a: number, b: number) => a/b;

function saludar(nombre: string, edad?: number): string{
    if (edad !== undefined){
        return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`
    } else {
        return `Hola, mi nombre es ${nombre}.`;
    }
}

function saludar2(nombre: string, edad: number=30): string{
    return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`
}

//Clases

class Persona{
    nombre: string;

    constructor(nombre: string){
        this.nombre = nombre
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre}.`)
    }
}

//Interfaces

interface Persona {
    nombre: string;
    edad: number;
}

interface Producto{
    nombre: string;
    precio: number;
    descripcion?: string;
}

interface Comparador{
    (a: number, b: number): boolean;
}

interface Persona {
    nombre: string;
    edad: number;
    saludar(): void;
}

//Types

type Numero = number;

type Persona1 = {
    nombre: string;
    edad: number;
}

type nombre = string | null;

type Producto1  = {
    nombre: string
    precio: number
    descripcion?: string
}

type Comparador1 = {
    (a: number, b: number): boolean;
}

type Persona2 = {
    nombre: string;
    edad: number;
    saludar(): void;
}


