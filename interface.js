"use strict";
let dev = {
    nombre: 'Sergie Code',
    tecnologias: ['React', 'Angular', 'Svelte'],
    tomarMate: true
};
let dev2 = {
    name: 'Federico',
    tech: ['HTML', 'COBOL'],
    lastName: 'Buenardo'
};
function enviarCurriculum(programador) {
    console.log(` Este curriculum es de ${programador.nombre}`);
}
enviarCurriculum(dev);
