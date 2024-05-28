/* LOGIN */

let email_ingresado = prompt("ingrese su email")

function verificarEmail (email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

while (verificarEmail(email_ingresado) === false) {
    email_ingresado = prompt("error, ingrese el email nuevamente")
    verificarEmail(email_ingresado)
}

alert("email ingresado correctamente")

let password_ingresada = prompt("ingrese una contraseña que contenga al menos 6 digitos y una mayuscula")

function verificarPassword (password){
    return password.toLowerCase() === password || String(password).length <= 6
}

while (verificarPassword(password_ingresada) === true) {
    password_ingresada = prompt("contraseña no valida, intente nuevamente")
    verificarPassword(email_ingresado)
}

alert("contraseña valida")

/* CALCULADORA */

let operacion_ingresada = prompt("ingrese la operacion que desea realizar (+ o -)")

function verificarOperacion (operacion) {
    return operacion === "+" || operacion === "-"
}

while (verificarOperacion(operacion_ingresada) === false){
    operacion_ingresada = prompt("la operacion ingresada no es una suma o una resta")
    verificarOperacion(operacion_ingresada)
}

let numero_a = parseFloat(prompt("ingrese el primer numero"))
let numero_b = parseFloat(prompt("ingrese el segundo numero"))

function validarNumeros (numeroA, numeroB) {
    return isNaN(numeroA) || isNaN(numeroB)
}

while (validarNumeros(numero_a, numero_b) === true) {
    numero_a = parseFloat(prompt("los valores ingresados no son numeros, ingrese el primer numero"))
    numero_b = parseFloat(prompt("ingrese el segundo numero"))
    validarNumeros(numero_a, numero_b)
}

let resultado_operacion = 0

if (operacion_ingresada === "+") {
    resultado_operacion = numero_a + numero_b
    alert("la suma de " + numero_a + " + " + numero_b + " es igual a " + resultado_operacion)
}
else{
    resultado_operacion = numero_a - numero_b
    alert("la resta de " + numero_a + " - " + numero_b + " es igual a " + resultado_operacion)
}

/* HISTORIAL */

const historial = [
    {
        accion: 'CALCULAR',
        operacion: operacion_ingresada,
        a: numero_a,
        b: numero_b,
        resultado: resultado_operacion
    }
]

const mapeo_objetos = historial.map(function (historial){
    return historial.accion + "\n" + historial.operacion + "\n" + historial.a + "\n" + historial.b + "\n" + historial.resultado
})

console.log("el historial es:\n" + mapeo_objetos)