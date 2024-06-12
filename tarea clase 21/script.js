/* Hacer un formulario para productos

Titulo: string con mas de 6 caracteres
Precio: numero valido 
Descripcion (textarea): string con mas de 100 caracteres
stock: numero valido
Codigo: string pero que tenga un # por delante EJ: '#aj504'/ '#pepe' / '#123' */

const formulario_html = document.getElementById("formulario") /* creo una constante que guarda el valor del elemento con id "formulario" */

const validarNumeros = (numero) => numero && !isNaN(numero) /* creo una funcion que valida si un numero contiene un valor y no es NaN */

const VALIDACIONES = { /* creo un diccionario con 5 propiedades que se le asignan al producto ingresado */
    titulo: {
        validacion: (texto) => texto.length >= 6, /* valido si el titulo tiene al menos 6 caracteres */
        mensaje: "el titulo tiene menos de 6 caracteres" 
    },
    precio: {
        validacion: validarNumeros, /* llamo a validarNumeros */
        mensaje: "el valor ingresado no es un numero"
    },
    descripcion: {
        validacion: (texto) => texto.length >= 100, /* valido si el texto del textarea de la descripcion tiene por lo menos 100 caracteres */
        mensaje: "la descripcion debe tener por lo menos 100 caracteres"
    },  
    stock: {
        validacion: validarNumeros, /* llamo a validarNumeros */ 
        mensaje: "el valor ingresado no es un numero"
    },
    codigo: {
        validacion: (texto) => texto.startsWith("#"), /* valido si el codigo empieza con # */
        mensaje: "el codigo debe comenzar con #"
    }
}

function obtenerProductos (formulario) { /* creo una funcion que toma como parametro un formulario */

    const propiedades_productos = ["titulo", "precio", "descripcion", "stock", "codigo"] /* creo un array que tenga el mismo nombre de las propiedades del diccionario */
    const valores_productos = {} /* creo un objeto vacio */

    for (const propiedad of propiedades_productos) { /* hago un bucle forof, que itera cada elemento en el array "propiedades_productos" */

        const span_error_hmtl = formulario.querySelector(".error-text-" + propiedad) /* creo una constante donde llamo a la etiqueta HTML que tenga la clase error-text- y le sumo el valor de la propiedad, para identificarla */

        const propiedad_producto = formulario[propiedad].value /* creo una constante que guarda el valor de la propiedad del formulario */

        valores_productos[propiedad] = { /* le agrego al objeto vacio estas propiedades */
            error_html: span_error_hmtl, /* la etiqueta span donde se va a mostrar el error */
            validacion: VALIDACIONES[propiedad].validacion, /* la validacion de la propuedad */
            error_text: VALIDACIONES[propiedad].mensaje, /* el mensaje que se va a mostrar en el span */
            valor: propiedad_producto /* el valor de la propiedad del producto */
        } 
    }
    return valores_productos /* retorno el objeto */
}

function handleProducto (event) { /* creo el handle de mi formulario */

    event.preventDefault() /* prevengo su comportamiento por default */

    const datos_producto = event.target /* guardo en una constante el target del evento, es decir, el formulario enviado */
    const valores_productos = obtenerProductos(datos_producto) /* guardo en otra constante el retorno de la funcion obtenerProductos(), es decir, el objeto */

    console.log(valores_productos) /* muestro en consola el objeto */

    for (const propiedad_del_producto in valores_productos) { /* creo un forin que recorre cada propiedad del objeto */

        const objeto_valores_productos = valores_productos[propiedad_del_producto] /* creo una constante que guarda la propiedad del objeto que se esta iterando */

        if(!objeto_valores_productos.validacion(objeto_valores_productos.valor)){ /* si la funcion validacion de la propiedad del objeto devuelve true */
            objeto_valores_productos.error_html.innerText = objeto_valores_productos.error_text /* hago un innerText en el span que guarde anteriormente, y le inserto el texto de error */
        }
        else{
            objeto_valores_productos.error_html.innerText = "" /* sino elimino el texto que contiene el span, para que si no hay error no muestre nada, o elimine el error que hubo anteriormente */
        }
    }
}

formulario_html.addEventListener("submit", handleProducto) /* agrego un evento a mi formulario, que se activa cada vez que se hace un submit, y le paso el handleProducto */