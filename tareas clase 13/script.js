/* tarea 1: Escribe un condicional que verifique si una variable llamada "tieneHijos" es "true". Si es "true", imprime "Tienes hijos" en la consola. Si es "false", imprime "No tienes hijos" en la consola. */

let tieneHijos = false

if (tieneHijos ===  true) {
    console.log("tiene hijos")
}
else if (tieneHijos === false) {
    console.log("no tiene hijos")
}
else {
    console.log("error: dato no valido")
}

/* tarea 2: Escribe un condicional que verifique si una variable llamada "genero" es "hombre" o "mujer". Si es "hombre", imprime "Eres hombre" en la consola. Si es "mujer", imprime "Eres mujer" en la consola. */

let genero = "hombre"

if (genero === "hombre") {
    console.log("hombre")
}
else if (genero === "mujer") {
    console.log("mujer")
}
else {
    console.log("error: dato no valido")
}

/* tarea 3: que el usuario realice la carga de un dato por teclado dicho dato será el lado de un cuadrado ,para luego  mostrar por pantalla el perímetro del mismo . */

let ladoDelCuadrado = prompt("ingrese el largo de un lado de un cuadrado")

let perimetroDelCuadrado = ladoDelCuadrado * 4

alert("el perimetro del cuadrado es de: " + perimetroDelCuadrado)

/* tarea 4: hacer un programa donde se ingresan cuatro números, calcular e informar la suma de los dos primeros y la multiplicación del tercero y el cuarto. */

let primerNumero = Number(prompt("ingrese el primer numero"))
let segundoNumero = Number(prompt("ingrese el segundo numero"))
let tercerNumero = Number(prompt("ingrese el tercer numero"))
let cuartoNumero = Number(prompt("ingrese el cuarto numero"))

let suma = primerNumero + segundoNumero
let multiplicacion = tercerNumero * cuartoNumero

console.log("la suma de los dos primeros numeros da: " + suma)
console.log("la multiplicacion de los dos ultimos numeros da: " + multiplicacion)

/* tarea 5: Se ingresa  un valor entero, mostrar un mensaje que indique si el número es positivo, cero o negativo. */

let numero = prompt("ingrese un numero entero")

if (numero === 0) {
    console.log("su numero es 0")
}
else if (numero > 0) {
    console.log("su numero es positivo")
}
else if (numero < 0) {
    console.log("su numero es negativo")
}
else {
    console.log("error: dato no valido")
}

/* tarea 6: Escribe una expresión que use el operador "&&" (and lógico) para verificar si una variable llamada "edad" es mayor o igual a 18 y si una variable llamada "tienePermiso" es "true". Si ambas condiciones se cumplen, imprime "Puedes conducir" en la consola. Si alguna de las dos condiciones no se cumple, imprime "No puedes conducir" en la consola. */

let edad = 16
let tienePermiso = true

let verificacion = edad >= 18 && tienePermiso === true

if (verificacion === false) {
    console.log("no podes conducir")
}
else {
    console.log("podes conducir")
}