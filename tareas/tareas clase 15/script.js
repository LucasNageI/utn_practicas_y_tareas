/* ejercicio 1 */

function verificarURL (url) {
    String(url)

    if(url.includes("https://")){
        return ("la url ingresada cuenta con el certificado ssl")
    }
    else if(url.includes("http://")){
        return ("tu url no cuenta con certificado ssl")
    }
    else if (url === null){
        return ("por favor, ingrese una url")
    }
    else{
        return ("por favor, ingrese una url")
    }
}

let url_ingresada = "https://"
console.log(verificarURL(url_ingresada))

/* ejercicio 2 */

let textos = ["hola%20como%20estas,%20todo%20bien?", "no%20me%20siento%20bien", "que%20mal"]

function descifrarTextos (texto){
    return texto.replaceAll("%20", " ")
}
console.log(descifrarTextos(textos[0]))

/* aplicacion con for */

function descifrarTextos (texto){
    return texto.replaceAll("%20", " ")
}

for (i = 0; i < textos.length; i++){
    console.log(descifrarTextos(textos[i]))
}

/* ejercicio 3 */

let texto_ingresado = "hola como estas, yo bien"

function cifrarTexto (texto){
    String(texto)
    return texto.replaceAll(" ", "%20")
}

let texto_cifrado = cifrarTexto(texto_ingresado)
console.log(texto_cifrado)

/* descifrar el texto cifrado anteriormente */

let texto_descifrado = descifrarTextos(texto_cifrado)
console.log(texto_descifrado)

/* ejercicio 4 */

let texto_con_mayuscula = "Undefined"

function verificarString (dato_a_verificar){
    return typeof(dato_a_verificar) === "string"
}


console.log(verificarString(texto_con_mayuscula))

function verificarMayusculas (dato){

    if(verificarString(dato) === false){
        return ("el texto no es un string, intente de nuevo")
    }

    let dato_convertido = dato.toLowerCase()

    if(dato_convertido === dato){
        return ("el texto no contiene mayusculas")
    }
    else{
        return ("el texto contiene mayusculas")
    }

}

console.log(verificarMayusculas(texto_con_mayuscula))