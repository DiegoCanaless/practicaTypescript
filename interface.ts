interface ProgramadorInterfaz{
    nombre: string,
    tecnologias: string[],
    tomarMate?: boolean|null
}

let dev: ProgramadorInterfaz = {
    nombre: 'Sergie Code',
    tecnologias:['React', 'Angular', 'Svelte'],
    tomarMate: true
}

let dev2 ={
    name: 'Federico',
    tech: ['HTML','COBOL'],
    lastName: 'Buenardo'
}

function enviarCurriculum (programador : ProgramadorInterfaz){
    console.log(` Este curriculum es de ${programador.nombre}`)
}

enviarCurriculum(dev)