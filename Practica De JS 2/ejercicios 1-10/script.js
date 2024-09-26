//1

for(let i = 1; i <= 10; i++){
    console.log("numeros del 1-10: " + i)
}

//2

for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log("numeros pares 2-20: " + i)
    }
}

//3

for(let i = 1; i <= 20; i++){
    if(i % 2 != 0){
        console.log("numeros impares 1-19: " + i)
    }
}

//4

const array_de_numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const array_invertido = array_de_numeros.reverse()

for(let i = 0; i <= 9; i++){
    console.log(array_invertido[i])
}

//5

for(let i = 1; i <= 10; i++){
    if(i <= 5){
        console.log(i)
    }
    else{
        console.log("el numero es mayor a 5")
    }
}

//6

for(let i = 1; i <= 10; i++){
    if(i != 5){
        console.log(i)
    }
    else{
        console.log("saltar numero")
    }
}

//7

const sayName = (nombre) => {
    console.log("hola " + nombre)
}

sayName("lucas")

//8

const alertName = (nombre) => {
    alert("hola " + nombre)
}

let nombre_ingresado = prompt("cual es tu nombre?")

alertName(nombre_ingresado)

//9

const sumar = (a, b) => {
    return a + b
}

//10

const restar = (a, b) => {
    return a - b
}

//11

let operacion = "-"
let numeros = [2, 10]

const calcular = (operacion, numeros) => {
    if(operacion === "+" || operacion === "-"){
        if(operacion === "+"){
            console.log(numeros[0] + numeros[1]) 
        }
        else{
            console.log(numeros[0] - numeros[1]) 
        }
    }
    else {
        console.log("la operacion no es valida")
    }
}

calcular(operacion, numeros)

