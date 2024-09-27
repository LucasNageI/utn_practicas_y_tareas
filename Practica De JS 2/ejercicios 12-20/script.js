//12

const contarHasta = () => {
    let limit = 12
    for(let i = 0; i <= limit; i++){
        console.log(i)
    }
}

contarHasta()

//13

let consulta = prompt("desea usar la app?")

if(consulta != "si"){
    console.log("la app termino")
} else {
    let primer_numero = prompt("ingrese el primer numero")
    let segundo_numero = prompt("ingrese el segundo numero")
    let operacion = prompt("ingrese la operacion (x, /, +, -)")

    primer_numero === Number(primer_numero)
    segundo_numero === Number(segundo_numero)

    const setResult = (a, b, operacion) => {
        a = Number(a)
        b = Number(b)

        if(operacion === "x"){
            console.log(a * b)
        } else if(operacion === "/"){
            console.log(a / b)
        } else if(operacion === "+"){
            console.log(a + b)
        } else if(operacion === "-"){
            console.log(a - b)
        } else{
            console.log("error")
        }
    }

    while(consulta === "si") {
        setResult(primer_numero, segundo_numero, operacion)
        consulta = prompt("desea usar la app?")
        if(consulta === "si"){
            primer_numero = prompt("ingrese el primer numero")
            segundo_numero = prompt("ingrese el segundo numero")
            operacion = prompt("ingrese la operacion (x, /, +, -)")
        }else {
            console.log("la app termino")
        }
    }
    
}

