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