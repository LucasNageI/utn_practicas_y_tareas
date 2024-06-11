/* Hacer un formulario para productos

Titulo: string con mas de 6 caracteres
Precio: numero valido 
Descripcion (textarea): string con mas de 100 caracteres
stock: numero valido
Codigo: string pero que tenga un # por delante EJ: '#aj504'/ '#pepe' / '#123' */

const formulario_html = document.getElementById("formulario")

const validarNumeros = (numero) => numero && !isNaN(numero)

const VALIDACIONES = {
    titulo: {
        validacion: (texto) => texto.length > 6,
        mensaje: "el titulo tiene menos de 6 caracteres"
    },
    precio: {
        validacion: validarNumeros,
        mensaje: "el valor ingresado no es un numero"
    },
    descripcion: {
        validacion: (texto) => texto.length > 100,
        mensaje: "la descripcion debe tener por lo menos 100 caracteres"
    },  
    stock: {
        validacion: validarNumeros,
        mensaje: "el valor ingresado no es un numero"
    },
    codigo: {
        validacion: (texto) => texto.startsWith("#"),
        mensaje: "el codigo debe comenzar con #"
    }
}

const obtenerProductos = (formulario) => {
    const propiedades_productos = ["titulo", "precio", "descripcion", "stock", "codigo"]
    const valores_productos = {}
    for (const propiedad of propiedades_productos) {
        const span_error_hmtl = formulario.querySelector(".error-text-" + propiedad)
        const propiedad_producto = formulario[propiedad].value
        valores_productos[propiedad] = {
            error_html: span_error_hmtl,
            validacion: VALIDACIONES[propiedad].validacion,
            error_text: VALIDACIONES[propiedad].mensaje,
            valor: propiedad_producto
        } 
    }
    return valores_productos
}

const handleProducto = (event) => {
    event.preventDefault()
    const datos_producto = event.target
    const valores_productos = obtenerProductos(datos_producto)
    console.log(valores_productos)
    for (const propiedad_del_producto in valores_productos) {
        const objeto_valores_productos = valores_productos[propiedad_del_producto]
        if(!objeto_valores_productos.validacion(objeto_valores_productos.valor)){
            objeto_valores_productos.error_html.innerText = objeto_valores_productos.error_text
        }
        else{
            objeto_valores_productos.error_html.innerText = ""
        }
    }
}

formulario_html.addEventListener("submit", handleProducto)