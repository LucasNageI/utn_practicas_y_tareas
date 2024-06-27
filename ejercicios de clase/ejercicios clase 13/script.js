/* ejercicio 1 */

let tieneHijos = false
alert (tieneHijos)

/* ejercicio 2 */

let salario = prompt("ingrese su salario mensual actual")
let salarioAnual = salario * 12

alert("su salario anual es: " + salarioAnual)

/* ejercicio 3 */

let edad = prompt("ingrese su edad")

if (edad >= 18) {
    console.log("sos mayor de edad")
}
else if (edad <= 17) {
    console.log("sos menor de edad")
}
else {
    console.log("error: dato no valido")
}

/* ejercicio opcional */

let sueldo = prompt("ingrese su sueldo actual")
let antiguedad = prompt("cuantos años lleva en la empresa?")

if (sueldo <= 500 && antiguedad >= 10) {
    sueldo = sueldo * 1.2
    console.log("va a obtener un amuento del 20%, es decir: " + sueldo)
}
else if (sueldo <= 500 && antiguedad > 10) {
    sueldo = sueldo * 1.05
    console.log("va a obtener un amuento del 5%, es decir: " + sueldo)
}
else if (sueldo >= 500) {
    console.log("su sueldo permanecera siendo " + sueldo)
}
else {
    console.log("error: dato no valido")
}