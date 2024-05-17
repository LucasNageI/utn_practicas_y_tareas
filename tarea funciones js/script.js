function validarCantidadAlumnos () {
    let cantidadDeAlumnos = prompt("ingrese cuantas personas son en la clase")
    while (!cantidadDeAlumnos || isNaN(cantidadDeAlumnos)) {
        cantidadDeAlumnos = prompt("el dato ingresado no es un numero, por favor, ingrese cuantas personas son en la clase")
    }
    cantidadDeAlumnos = Number(cantidadDeAlumnos)
    return cantidadDeAlumnos
}

cantidadDeAlumnos = validarCantidadAlumnos()

console.log(cantidadDeAlumnos)

for(let i = 1; i <= cantidadDeAlumnos ; i++) {
    let nombreDeLosAlumnos = prompt("ingrese el nombre de un alumno")
    while (!nombreDeLosAlumnos) {
        nombreDeLosAlumnos = prompt("el dato ingresado no contiene un nombre, por favor, ingrese el nombre de un alumno")
    }
    console.log(nombreDeLosAlumnos)
}